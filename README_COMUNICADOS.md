# 📢 Sistema de Comunicados - OlharMais

## 🎯 Visão Geral

O Sistema de Comunicados substitui o antigo sistema de notificações, oferecendo uma solução hierárquica e organizada para comunicação entre diferentes níveis de usuários no sistema educacional.

## ✅ Correções Implementadas

### **Problema Resolvido:**
- ❌ **Erro 400 - Bad Request**: `column usuarios.soft_delete does not exist`
- ✅ **Solução**: Removidas todas as referências ao campo `soft_delete` da tabela `usuarios`

### **Melhorias na Interface:**
- ✅ **Fotos dos usuários**: Exibição de avatar com fallback para imagem padrão
- ✅ **Layout melhorado**: Cards com foto, nome e profissão organizados
- ✅ **Checkboxes personalizados**: Estilo moderno com feedback visual
- ✅ **Tratamento de erros**: Mensagens claras para o usuário

## 🏗️ Estrutura do Sistema

### **Hierarquia de Comunicação:**
```
Prefeito
├── → Secretários
│
Secretário  
├── → Diretores
├── → Coordenadores
└── → Professores
│
Diretores
├── → Coordenadores
└── → Professores
│
Coordenadores
└── → Professores
│
Professores
└── → Responsáveis (Pais)
│
Nutricionista (apenas recebe)
├── ← Prefeito
└── ← Secretário
│
Responsáveis (apenas recebe)
└── ← Professores
```

### **Níveis de Importância:**
- 🟢 **Informativo**: Lembretes, avisos simples, cronogramas
- 🟡 **Importante**: Mudanças administrativas, novas orientações, decisões de gestão
- 🔴 **Urgente**: Situações emergenciais, ações imediatas, segurança

## 🗄️ Banco de Dados

### **Tabelas Criadas:**
1. **`comunicados`** - Armazena os comunicados principais
2. **`comunicados_destinatarios`** - Controla destinatários e status de leitura
3. **`view_comunicados_completos`** - View otimizada para consultas

### **Execução do SQL:**
```sql
-- Execute o arquivo comunicados_sql.sql no seu banco Supabase
-- Todas as tabelas, views, políticas e funções serão criadas automaticamente
```

## 🔧 Instalação

### **1. Banco de Dados:**
```sql
-- Execute o arquivo comunicados_sql.sql no Supabase
-- Isso criará todas as estruturas necessárias
```

### **2. Arquivos do Sistema:**
- **`profissional/notificacoes_profi.html`** - Interface principal
- **`comunicados_sql.sql`** - Script do banco de dados

### **3. Replicação para Outros Perfis:**
```bash
# Copie o arquivo para outras pastas de usuários
cp profissional/notificacoes_profi.html gestor/notificacoes_gestor.html
cp profissional/notificacoes_profi.html nutricionista/notificacoes_nutri.html
cp profissional/notificacoes_profi.html responsavel/notificacoes_respo.html
```

## 📱 Funcionalidades

### **Para Todos os Usuários:**
- ✅ **Visualizar comunicados recebidos**
- ✅ **Marcar como lido**
- ✅ **Filtrar por importância**
- ✅ **Interface responsiva**

### **Para Usuários com Permissão de Envio:**
- ✅ **Criar novos comunicados**
- ✅ **Escolher nível de importância**
- ✅ **Enviar para profissão específica**
- ✅ **Enviar para usuários específicos**
- ✅ **Visualizar comunicados enviados**

## 🔒 Segurança

### **Políticas RLS Implementadas:**
- ✅ **Controle de acesso** por usuário autenticado
- ✅ **Validação de hierarquia** automática
- ✅ **Permissões específicas** por profissão
- ✅ **Auditoria completa** de ações

### **Validações:**
- ✅ **Hierarquia de profissões** respeitada
- ✅ **Usuários válidos** apenas
- ✅ **Campos obrigatórios** validados

## 🎨 Interface

### **Características:**
- ✅ **Design moderno** com Tailwind CSS
- ✅ **Responsivo** para mobile e desktop
- ✅ **Indicadores visuais** para status
- ✅ **Animações suaves** para interações

### **Componentes:**
- **Abas**: Recebidos / Enviados (conforme permissão)
- **Filtros**: Por nível de importância
- **Cards**: Comunicados com informações completas
- **Modais**: Detalhes e criação de comunicados

## 🚀 Como Usar

### **1. Acesso:**
- Entre no sistema com suas credenciais
- Acesse a seção "Comunicados" (antiga "Notificações")

### **2. Visualizar Comunicados:**
- **Aba "Recebidos"**: Veja comunicados direcionados a você
- **Filtros**: Use os botões para filtrar por importância
- **Detalhes**: Clique em um comunicado para ver detalhes completos

### **3. Criar Comunicados** (se permitido):
- Clique em **"Novo Comunicado"**
- Preencha título, conteúdo e nível de importância
- Escolha destinatários:
  - **Todos de uma profissão**: Envio em massa
  - **Usuários específicos**: Seleção individual
- Clique em **"Enviar Comunicado"**

### **4. Marcar como Lido:**
- Abra o comunicado no modal de detalhes
- Clique em **"Marcar como Lido"**
- O comunicado será marcado automaticamente

## 🐛 Resolução de Problemas

### **Erro: "Profissão não definida"**
- **Causa**: Usuário sem profissão cadastrada
- **Solução**: Contate o suporte para definir a profissão

### **Erro: "Nenhum usuário encontrado"**
- **Causa**: Não há usuários com as profissões permitidas
- **Solução**: Verifique se existem usuários cadastrados nas profissões de destino

### **Erro: "Não autorizado"**
- **Causa**: Usuário tentando enviar para profissão não permitida
- **Solução**: Verifique a hierarquia de profissões permitidas

## 📊 Monitoramento

### **Logs Importantes:**
```javascript
// No console do navegador, você verá:
console.log('Dados do usuário:', this.usuario);
console.log(`Comunicado enviado para ${destinatarios.length} destinatário(s)`);
```

### **Verificações no Banco:**
```sql
-- Verificar comunicados
SELECT * FROM comunicados ORDER BY created_at DESC;

-- Verificar destinatários
SELECT * FROM comunicados_destinatarios WHERE lido = false;

-- Estatísticas por usuário
SELECT * FROM estatisticas_comunicados('UUID_DO_USUARIO');
```

## 🔄 Próximos Passos

### **Funcionalidades Futuras:**
- 📧 **Notificações por email**
- 📱 **Push notifications**
- 📈 **Dashboard de estatísticas**
- 🔔 **Lembretes automáticos**

### **Melhorias Planejadas:**
- 🎯 **Comunicados por escola/turma**
- 📎 **Anexos de arquivos**
- 🕐 **Agendamento de envios**
- 📋 **Templates de comunicados**

---

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.

**Sistema desenvolvido para OlharMais** 🎓 