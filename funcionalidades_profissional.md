# Funcionalidades do Perfil Profissional - OlharMais

## 📋 Visão Geral
O perfil **Profissional** é destinado a profissionais da educação (professores, coordenadores, diretores) que trabalham diretamente com as escolas e turmas. Possui acesso específico às turmas/escolas permitidas e funcionalidades especializadas para acompanhamento educacional.

---

## 🏠 **Home (Dashboard Principal)**
**Arquivo:** `home_profi.html`

### Funcionalidades:
- **Dashboard Resumido**: Visualização de métricas das turmas/escolas permitidas
- **Cards de Métricas**:
  - Total de escolas
  - Total de turmas  
  - Total de alunos
  - Percentual de presença do dia
- **Stories/Notificações**: Visualização de stories em formato de círculos
- **Resumo por Escola**: Cards individuais com dados de cada escola permitida
- **Navegação Principal**: Acesso a todas as seções do sistema
- **Menu Lateral**: Navegação entre funcionalidades
- **Responsividade**: Interface adaptável para mobile e desktop

---

## 📹 **Câmeras**
**Arquivo:** `cameras_profi.html`

### Funcionalidades:
- **Visualização de Câmeras**: Acesso às câmeras das escolas permitidas
- **Filtros por Escola**: Seleção específica de escolas
- **Filtros por Turma**: Seleção específica de turmas
- **Layout Responsivo**: Grid adaptável para diferentes tamanhos de tela
- **Controles de Câmera**: Play, pause, fullscreen
- **Status de Câmera**: Indicadores de online/offline
- **Navegação Intuitiva**: Interface amigável para visualização

---

## 📊 **Frequência**
**Arquivo:** `frequencia_profi.html`

### Funcionalidades:
- **Consulta de Frequência**: Busca por nome do aluno
- **Filtros Avançados**:
  - Por escola
  - Por turma
  - Por período (data)
- **Visualização de Dados**:
  - Lista de alunos com frequência
  - Status de presença (presente/ausente)
  - Histórico de registros
- **Ações por Aluno**:
  - Visualizar ficha completa
  - Ver histórico detalhado
- **Exportação**: Funcionalidade para exportar dados
- **Interface Responsiva**: Adaptável para mobile

---

## 🔔 **Notificações**
**Arquivo:** `notificacoes_profi.html`

### Funcionalidades:
- **Lista de Notificações**: Visualização de todas as notificações recebidas
- **Filtros**:
  - Por tipo de notificação
  - Por data
  - Por status (lida/não lida)
- **Detalhes da Notificação**: Visualização completa do conteúdo
- **Marcar como Lida**: Funcionalidade para marcar notificações
- **Exclusão**: Remover notificações antigas
- **Navegação**: Links para páginas relacionadas

---

## 👤 **Perfil**
**Arquivo:** `perfil_profi.html`

### Funcionalidades:
- **Dados Pessoais**:
  - Nome completo (editável)
  - WhatsApp (editável com verificação)
- **Foto de Perfil**:
  - Upload de nova foto
  - Visualização atual
  - Suporte a formatos de imagem
- **Verificação de WhatsApp**:
  - Sistema de códigos de verificação
  - Alteração segura de número
  - Validação em duas etapas
- **Salvamento de Dados**: Atualização automática no banco
- **Interface Responsiva**: Adaptável para mobile

---

## 📋 **Ficha do Aluno**
**Arquivo:** `ficha_aluno.html`

### Funcionalidades:
- **Informações Completas do Aluno**:
  - Dados pessoais
  - Informações da escola
  - Dados da turma
  - Contatos dos responsáveis
- **Foto do Aluno**: Visualização da foto de perfil
- **Registros de Frequência**:
  - Histórico completo de presenças
  - Filtro por mês
  - Horários de entrada e saída
- **Funcionalidade de Impressão**: Botão para imprimir ficha
- **Navegação**: Botão para voltar à página anterior
- **Interface Responsiva**: Adaptável para diferentes dispositivos

---

## 📈 **Dashboard Avançado**
**Arquivo:** `dashboard_profi.html`

### Funcionalidades:
- **Dashboard em Tempo Real**: Interface moderna com métricas live
- **Métricas Principais**:
  - Total de alunos
  - Presentes hoje
  - Frequência média
  - Turmas ativas
  - Alertas ativos
- **3 Views Rotativas**:
  - **View 1**: Visão Geral
    - Gráfico de frequência por turma
    - Top 10 melhores alunos
    - Atividade recente
  - **View 2**: Análise Detalhada
    - Tendências dos últimos 7 dias
    - Distribuição por horário
  - **View 3**: Alunos Críticos
    - Alunos com baixa frequência
    - Comparativo de performance
- **Rotação Automática**: Mudança automática de views a cada 15 segundos
- **Controles Manuais**: Botões para alternar views
- **Relógio em Tempo Real**: Exibição da hora atual
- **Indicadores de Status**: Status de conexão e permissões

---

## 🤖 **Assistente IA**
**Arquivo:** `ia_profi.html`

### Funcionalidades:
- **Chat com IA**: Interface de conversação com assistente
- **Consultas de Frequência**: Perguntas sobre dados de frequência
- **Análises Inteligentes**: 
  - Estatísticas de presença
  - Identificação de padrões
  - Relatórios automáticos
- **Contexto Personalizado**: Acesso apenas às turmas permitidas
- **Histórico de Conversas**: Manutenção do histórico de interações
- **Formatação Markdown**: Respostas bem formatadas
- **Interface Responsiva**: Chat adaptável para mobile
- **Indicadores de Carregamento**: Feedback visual durante processamento

---

## 🔧 **Funcionalidades Gerais**

### Sistema de Navegação
**Arquivo:** `botoes_profi.js`

- **Barra de Navegação Mobile**: Navegação fixa na parte inferior
- **Menu Responsivo**: Adaptação para diferentes tamanhos de tela
- **Navegação por Ícones**: Interface intuitiva com ícones
- **Logout Seguro**: Função para sair do sistema
- **Compatibilidade PWA**: Suporte para modo standalone

### Sistema de Autenticação
- **Verificação de Login**: Controle de acesso às páginas
- **Validação de Perfil**: Verificação se é PROFISSIONAL
- **Redirecionamento**: Encaminhamento para login se necessário
- **Persistência de Sessão**: Manutenção do login

### Sistema de Permissões
- **Controle de Acesso**: Baseado em permissões de escola/turma
- **Filtros Automáticos**: Dados filtrados por permissões
- **Níveis de Acesso**:
  - Acesso por escola
  - Acesso por turma específica
- **Validação de Dados**: Apenas dados permitidos são exibidos

### Sistema de Notificações (Toast)
- **Feedback Visual**: Mensagens de sucesso, erro, aviso
- **Posicionamento**: Canto superior direito
- **Auto-dismiss**: Desaparecimento automático
- **Tipos de Mensagem**: Success, error, warning, info

---

## 📱 **Compatibilidade e Responsividade**

### Mobile-First Design
- **Interface Adaptável**: Otimizada para dispositivos móveis
- **Touch-Friendly**: Elementos adequados para toque
- **Navegação Mobile**: Barra de navegação específica para mobile
- **PWA Support**: Suporte para Progressive Web App

### Desktop Optimization
- **Layout Desktop**: Interface otimizada para telas maiores
- **Navegação Desktop**: Menu lateral para desktop
- **Responsividade**: Adaptação automática entre dispositivos

---

## 🔒 **Segurança e Privacidade**

### Controle de Acesso
- **Validação de Sessão**: Verificação constante de login
- **Permissões Granulares**: Acesso específico por escola/turma
- **Proteção de Dados**: Apenas dados autorizados são exibidos

### Validação de Dados
- **Verificação de Entrada**: Validação de formulários
- **Sanitização**: Limpeza de dados de entrada
- **Prevenção de XSS**: Proteção contra ataques

---

## 🚀 **Performance e UX**

### Carregamento Otimizado
- **Lazy Loading**: Carregamento sob demanda
- **Caching**: Armazenamento local de dados
- **Compressão**: Otimização de recursos

### Experiência do Usuário
- **Feedback Visual**: Indicadores de carregamento
- **Navegação Intuitiva**: Interface fácil de usar
- **Acessibilidade**: Suporte para diferentes necessidades
- **Consistência**: Design uniforme em todas as páginas

---

## 📊 **Integração com Banco de Dados**

### Supabase Integration
- **Cliente Supabase**: Conexão com banco de dados
- **Queries Otimizadas**: Consultas eficientes
- **Real-time Updates**: Atualizações em tempo real
- **Error Handling**: Tratamento de erros de conexão

### Views e Tabelas Utilizadas
- **view_alunos_logs**: Logs de frequência dos alunos
- **view_alunos_criticos**: Alunos com baixa frequência
- **dias_com_logs**: Estatísticas diárias de presença
- **permissoes_escola**: Permissões por escola
- **permissoes_turma**: Permissões por turma

---

## 🔄 **Atualizações e Manutenção**

### Sistema de Configuração
- **Lambda Integration**: Configurações via AWS Lambda
- **Dynamic Loading**: Carregamento dinâmico de configurações
- **Fallback System**: Sistema de backup para configurações

### Monitoramento
- **Error Logging**: Registro de erros
- **Performance Monitoring**: Monitoramento de performance
- **User Analytics**: Análise de uso (se implementado)

---

## 📋 **Resumo das Principais Diferenças do Profissional**

1. **Acesso Limitado**: Apenas às escolas/turmas permitidas
2. **Foco Educacional**: Interface específica para profissionais da educação
3. **Dashboard Avançado**: Sistema de métricas em tempo real
4. **Assistente IA**: Chat inteligente para consultas
5. **Ficha Completa**: Visualização detalhada de alunos
6. **Sistema de Câmeras**: Acesso às câmeras das escolas
7. **Notificações**: Sistema de notificações personalizado
8. **Perfil Completo**: Gerenciamento de dados pessoais
9. **Navegação Mobile**: Interface otimizada para mobile
10. **Segurança**: Controle rigoroso de permissões

O perfil Profissional oferece uma experiência completa e especializada para profissionais da educação, com foco em acompanhamento de frequência, análise de dados e comunicação eficiente.
