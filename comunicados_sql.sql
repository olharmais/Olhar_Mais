-- ========== SISTEMA DE COMUNICADOS ==========
-- Arquivo SQL completo para criar tabelas, views e políticas
-- Execute os comandos na ordem apresentada

-- ========== 1. TABELA PRINCIPAL DE COMUNICADOS ==========

CREATE TABLE comunicados (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    autor_id UUID NOT NULL REFERENCES usuarios(id),
    nivel_importancia TEXT NOT NULL CHECK (nivel_importancia IN ('informativo', 'importante', 'urgente')),
    tipo_envio TEXT NOT NULL CHECK (tipo_envio IN ('todos_profissao', 'usuarios_especificos')),
    profissao_destino TEXT, -- Usado quando tipo_envio = 'todos_profissao'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    soft_delete TIMESTAMP WITH TIME ZONE DEFAULT NULL
);

-- Índices para performance
CREATE INDEX idx_comunicados_autor ON comunicados(autor_id);
CREATE INDEX idx_comunicados_created_at ON comunicados(created_at DESC);
CREATE INDEX idx_comunicados_nivel_importancia ON comunicados(nivel_importancia);
CREATE INDEX idx_comunicados_soft_delete ON comunicados(soft_delete);

-- ========== 2. TABELA DE DESTINATÁRIOS ==========

CREATE TABLE comunicados_destinatarios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    comunicado_id UUID NOT NULL REFERENCES comunicados(id) ON DELETE CASCADE,
    usuario_id UUID NOT NULL REFERENCES usuarios(id),
    lido BOOLEAN DEFAULT FALSE,
    data_leitura TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(comunicado_id, usuario_id)
);

-- Índices para performance
CREATE INDEX idx_comunicados_destinatarios_comunicado ON comunicados_destinatarios(comunicado_id);
CREATE INDEX idx_comunicados_destinatarios_usuario ON comunicados_destinatarios(usuario_id);
CREATE INDEX idx_comunicados_destinatarios_lido ON comunicados_destinatarios(lido);

-- ========== 3. VIEW PARA COMUNICADOS COMPLETOS ==========

CREATE OR REPLACE VIEW view_comunicados_completos AS
SELECT 
    c.id,
    c.titulo,
    c.conteudo,
    c.autor_id,
    c.nivel_importancia,
    c.tipo_envio,
    c.profissao_destino,
    c.created_at,
    c.updated_at,
    
    -- Dados do autor
    u_autor.nome as autor_nome,
    u_autor.profissao as autor_profissao,
    
    -- Dados do destinatário
    cd.usuario_id as destinatario_id,
    cd.lido,
    cd.data_leitura,
    
    -- Dados do destinatário
    u_dest.nome as destinatario_nome,
    u_dest.profissao as destinatario_profissao
    
FROM comunicados c
INNER JOIN usuarios u_autor ON c.autor_id = u_autor.id
INNER JOIN comunicados_destinatarios cd ON c.id = cd.comunicado_id
INNER JOIN usuarios u_dest ON cd.usuario_id = u_dest.id
WHERE c.soft_delete IS NULL;

-- ========== 4. FUNÇÃO PARA ATUALIZAR TIMESTAMP ==========

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_comunicados_updated_at 
    BEFORE UPDATE ON comunicados 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========== 5. POLÍTICAS RLS (ROW LEVEL SECURITY) ==========

-- Habilitar RLS nas tabelas
ALTER TABLE comunicados ENABLE ROW LEVEL SECURITY;
ALTER TABLE comunicados_destinatarios ENABLE ROW LEVEL SECURITY;

-- ========== POLÍTICAS PARA COMUNICADOS ==========

-- Política para SELECT: Usuários podem ver comunicados que enviaram ou receberam
CREATE POLICY "Usuários podem ver comunicados próprios ou recebidos" 
ON comunicados FOR SELECT 
USING (
    autor_id = auth.uid() OR 
    id IN (
        SELECT comunicado_id 
        FROM comunicados_destinatarios 
        WHERE usuario_id = auth.uid()
    )
);

-- Política para INSERT: Usuários podem criar comunicados se tiverem profissão válida
CREATE POLICY "Usuários podem criar comunicados com profissão válida" 
ON comunicados FOR INSERT 
WITH CHECK (
    autor_id = auth.uid() AND
    EXISTS (
        SELECT 1 FROM usuarios 
        WHERE id = auth.uid() 
        AND profissao IN ('Prefeito', 'Secretário', 'Diretores', 'Coordenadores', 'Professores')
    )
);

-- Política para UPDATE: Usuários podem atualizar apenas comunicados próprios
CREATE POLICY "Usuários podem atualizar comunicados próprios" 
ON comunicados FOR UPDATE 
USING (autor_id = auth.uid())
WITH CHECK (autor_id = auth.uid());

-- Política para DELETE: Usuários podem fazer soft delete apenas dos próprios comunicados
CREATE POLICY "Usuários podem deletar comunicados próprios" 
ON comunicados FOR UPDATE 
USING (autor_id = auth.uid() AND soft_delete IS NULL)
WITH CHECK (autor_id = auth.uid());

-- ========== POLÍTICAS PARA DESTINATÁRIOS ==========

-- Política para SELECT: Usuários podem ver destinatários de comunicados próprios ou onde são destinatários
CREATE POLICY "Usuários podem ver destinatários relevantes" 
ON comunicados_destinatarios FOR SELECT 
USING (
    usuario_id = auth.uid() OR 
    comunicado_id IN (
        SELECT id FROM comunicados WHERE autor_id = auth.uid()
    )
);

-- Política para INSERT: Apenas autores podem adicionar destinatários
CREATE POLICY "Autores podem adicionar destinatários" 
ON comunicados_destinatarios FOR INSERT 
WITH CHECK (
    comunicado_id IN (
        SELECT id FROM comunicados WHERE autor_id = auth.uid()
    )
);

-- Política para UPDATE: Usuários podem atualizar status de leitura próprios
CREATE POLICY "Usuários podem atualizar status de leitura próprio" 
ON comunicados_destinatarios FOR UPDATE 
USING (usuario_id = auth.uid())
WITH CHECK (usuario_id = auth.uid());

-- ========== 6. FUNÇÃO PARA VERIFICAR HIERARQUIA DE PROFISSÕES ==========

CREATE OR REPLACE FUNCTION pode_enviar_para_profissao(
    profissao_origem TEXT,
    profissao_destino TEXT
) RETURNS BOOLEAN AS $$
BEGIN
    -- Definir hierarquia de profissões
    CASE profissao_origem
        WHEN 'Prefeito' THEN
            RETURN profissao_destino IN ('Secretário');
        WHEN 'Secretário' THEN
            RETURN profissao_destino IN ('Diretores', 'Coordenadores', 'Professores');
        WHEN 'Diretores' THEN
            RETURN profissao_destino IN ('Coordenadores', 'Professores');
        WHEN 'Coordenadores' THEN
            RETURN profissao_destino IN ('Professores');
        WHEN 'Professores' THEN
            RETURN profissao_destino IN ('Responsáveis');
        ELSE
            RETURN FALSE;
    END CASE;
END;
$$ LANGUAGE plpgsql;

-- ========== 7. TRIGGER PARA VALIDAR HIERARQUIA ==========

CREATE OR REPLACE FUNCTION validar_hierarquia_comunicado()
RETURNS TRIGGER AS $$
DECLARE
    profissao_autor TEXT;
BEGIN
    -- Buscar profissão do autor
    SELECT profissao INTO profissao_autor
    FROM usuarios
    WHERE id = NEW.autor_id;
    
    -- Validar apenas se for envio para profissão específica
    IF NEW.tipo_envio = 'todos_profissao' THEN
        IF NOT pode_enviar_para_profissao(profissao_autor, NEW.profissao_destino) THEN
            RAISE EXCEPTION 'Usuário com profissão % não pode enviar comunicados para %', 
                profissao_autor, NEW.profissao_destino;
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger
CREATE TRIGGER validar_hierarquia_comunicado_trigger
    BEFORE INSERT OR UPDATE ON comunicados
    FOR EACH ROW EXECUTE FUNCTION validar_hierarquia_comunicado();

-- ========== 8. FUNÇÃO PARA ESTATÍSTICAS ==========

CREATE OR REPLACE FUNCTION estatisticas_comunicados(usuario_id UUID)
RETURNS JSON AS $$
DECLARE
    total_recebidos INTEGER;
    total_nao_lidos INTEGER;
    total_enviados INTEGER;
    total_urgentes INTEGER;
    resultado JSON;
BEGIN
    -- Contar comunicados recebidos
    SELECT COUNT(*) INTO total_recebidos
    FROM comunicados_destinatarios cd
    WHERE cd.usuario_id = estatisticas_comunicados.usuario_id;
    
    -- Contar não lidos
    SELECT COUNT(*) INTO total_nao_lidos
    FROM comunicados_destinatarios cd
    WHERE cd.usuario_id = estatisticas_comunicados.usuario_id
    AND cd.lido = FALSE;
    
    -- Contar enviados
    SELECT COUNT(*) INTO total_enviados
    FROM comunicados c
    WHERE c.autor_id = estatisticas_comunicados.usuario_id
    AND c.soft_delete IS NULL;
    
    -- Contar urgentes não lidos
    SELECT COUNT(*) INTO total_urgentes
    FROM comunicados_destinatarios cd
    INNER JOIN comunicados c ON cd.comunicado_id = c.id
    WHERE cd.usuario_id = estatisticas_comunicados.usuario_id
    AND cd.lido = FALSE
    AND c.nivel_importancia = 'urgente';
    
    -- Montar resultado
    resultado := json_build_object(
        'total_recebidos', total_recebidos,
        'total_nao_lidos', total_nao_lidos,
        'total_enviados', total_enviados,
        'total_urgentes', total_urgentes
    );
    
    RETURN resultado;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========== 9. DADOS INICIAIS (OPCIONAL) ==========

-- Inserir comunicado de exemplo (descomente se necessário)
/*
INSERT INTO comunicados (titulo, conteudo, autor_id, nivel_importancia, tipo_envio, profissao_destino)
VALUES (
    'Bem-vindos ao Sistema de Comunicados',
    'Este é o novo sistema de comunicados do OlharMais. Aqui você poderá enviar e receber comunicados importantes de acordo com sua função.',
    (SELECT id FROM usuarios WHERE profissao = 'Prefeito' LIMIT 1),
    'informativo',
    'todos_profissao',
    'Secretário'
);
*/

-- ========== 10. COMENTÁRIOS PARA DOCUMENTAÇÃO ==========

COMMENT ON TABLE comunicados IS 'Tabela principal para armazenar comunicados do sistema';
COMMENT ON TABLE comunicados_destinatarios IS 'Tabela para controlar destinatários e status de leitura';
COMMENT ON VIEW view_comunicados_completos IS 'View com dados completos dos comunicados incluindo autor e destinatário';
COMMENT ON FUNCTION pode_enviar_para_profissao IS 'Função para validar hierarquia de profissões no envio de comunicados';
COMMENT ON FUNCTION estatisticas_comunicados IS 'Função para obter estatísticas de comunicados de um usuário';

-- ========== FIM DO ARQUIVO SQL ==========

-- Para executar este arquivo:
-- 1. Conecte-se ao seu banco Supabase
-- 2. Execute os comandos em ordem
-- 3. Verifique se todas as tabelas foram criadas corretamente
-- 4. Teste as políticas RLS com diferentes usuários

-- Verificação final:
-- SELECT * FROM comunicados;
-- SELECT * FROM comunicados_destinatarios;
-- SELECT * FROM view_comunicados_completos; 