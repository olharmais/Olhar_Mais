-- Criar tabela estagiarios
CREATE TABLE estagiarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    telefone TEXT,
    codigo_acesso TEXT UNIQUE NOT NULL,
    escola_id INTEGER NOT NULL REFERENCES escolas(id),
    data_inicio DATE NOT NULL,
    data_limite DATE NOT NULL,
    ativo BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Adicionar índices para performance
CREATE INDEX idx_estagiarios_codigo_acesso ON estagiarios(codigo_acesso);
CREATE INDEX idx_estagiarios_escola_id ON estagiarios(escola_id);
CREATE INDEX idx_estagiarios_ativo ON estagiarios(ativo);

-- Inserir exemplo de estagiário para teste
INSERT INTO estagiarios (
    nome,
    telefone,
    codigo_acesso,
    escola_id,
    data_inicio,
    data_limite,
    ativo
) VALUES (
    'João Silva',
    '11999887766',
    'EST2025001',
    14,
    '2025-01-01',
    '2025-12-31',
    true
);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_estagiarios_updated_at 
    BEFORE UPDATE ON estagiarios 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 