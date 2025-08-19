# Funcionalidades do Perfil Gestor - OlharMais

## 📋 Visão Geral
O perfil **Gestor** é destinado a **Prefeitos** e **Secretários** que gerenciam o sistema educacional de uma cidade. Possui acesso completo aos dados das escolas, alunos e funcionalidades administrativas.

---

## 🏠 **Home (Dashboard Principal)**
**Arquivo:** `home_gestor.html`

### Funcionalidades:
- **Dashboard Resumido**: Visualização de métricas gerais da cidade
- **Cards de Métricas**:
  - Total de escolas
  - Total de turmas  
  - Total de alunos
  - Percentual de presença do dia
- **Stories/Notificações**: Visualização de stories em formato de círculos
- **Navegação Principal**: Acesso a todas as seções do sistema
- **Menu Lateral**: Navegação entre funcionalidades
- **Responsividade**: Interface adaptável para mobile e desktop

---

## 📹 **Câmeras**
**Arquivo:** `cameras_gestor.html`

### Funcionalidades:
- **Visualização de Câmeras**: Acesso às câmeras de todas as escolas
- **Seleção de Escola**: Dropdown para escolher escola específica
- **Seleção de Câmera**: Dropdown para escolher câmera específica
- **Streaming de Vídeo**: Visualização em tempo real das câmeras
- **Controles de Câmera**:
  - Botão de captura de foto
  - Botão de gravação de vídeo
  - Controles de zoom e movimento
- **Status de Câmera**: Indicador de status (online/offline)
- **Layout Responsivo**: Interface adaptável para diferentes telas

---

## 📊 **Frequência**
**Arquivo:** `frequencia_gestor.html`

### Funcionalidades:
- **Visualização de Frequência**: Acompanhamento da presença dos alunos
- **Filtros de Busca**:
  - Por escola
  - Por turma
  - Por data
- **Tabela de Frequência**: Lista detalhada de presenças
- **Estatísticas**: Percentual de presença por turma/escola
- **Exportação**: Possibilidade de exportar dados
- **Interface Responsiva**: Adaptável para mobile

---

## 📈 **Métricas**
**Arquivo:** `metricas_gestor.html`

### Funcionalidades:
- **Dashboard de Métricas**: Visualização de indicadores educacionais
- **Gráficos e Estatísticas**:
  - Frequência escolar
  - Desempenho acadêmico
  - Indicadores por escola
- **Filtros Temporais**: Seleção de período para análise
- **Comparativos**: Comparação entre escolas/regiões
- **Relatórios Visuais**: Gráficos interativos
- **Exportação de Dados**: Download de relatórios

---

## 📋 **Relatórios**
**Arquivo:** `relatorio_gestor.html`

### Funcionalidades:
- **Geração de Relatórios**: Criação de relatórios personalizados
- **Tipos de Relatório**:
  - Relatório de frequência
  - Relatório de desempenho
  - Relatório financeiro
- **Filtros Avançados**: Múltiplos critérios de filtragem
- **Exportação**: Download em diferentes formatos (PDF, Excel)
- **Agendamento**: Programação de relatórios automáticos
- **Histórico**: Acesso a relatórios anteriores

---

## 🔔 **Notificações**
**Arquivo:** `notificacoes_gestor.html`

### Funcionalidades:
- **Lista de Notificações**: Visualização de todas as notificações
- **Filtros**:
  - Por tipo de notificação
  - Por escola
  - Por data
- **Status de Leitura**: Marcação de notificações lidas/não lidas
- **Ações**:
  - Marcar como lida
  - Excluir notificação
  - Responder notificação
- **Notificações em Tempo Real**: Atualização automática

---

## ✏️ **Criar Notificação**
**Arquivo:** `criar_notificacao.html`

### Funcionalidades:
- **Formulário de Criação**: Interface para criar novas notificações
- **Campos do Formulário**:
  - Título da notificação
  - Conteúdo/mensagem
  - Destinatários (escolas, turmas, alunos)
  - Tipo de notificação
  - Data de envio
- **Anexos**: Possibilidade de anexar arquivos
- **Preview**: Visualização prévia da notificação
- **Agendamento**: Programação para envio futuro
- **Rascunhos**: Salvamento de notificações incompletas

---

## 👤 **Perfil**
**Arquivo:** `perfil_gestor.html`

### Funcionalidades:
- **Dados Pessoais**: Visualização e edição de informações pessoais
- **Foto de Perfil**: Upload e gerenciamento de foto
- **Alteração de Senha**: Formulário para troca de senha
- **Configurações de Conta**: Preferências do usuário
- **Histórico de Atividades**: Log de ações realizadas
- **Configurações de Notificação**: Preferências de alertas
- **Logout**: Encerramento de sessão

---

## 👨‍🎓 **Ficha do Aluno**
**Arquivo:** `ficha_aluno.html`

### Funcionalidades:
- **Visualização de Ficha**: Acesso completo aos dados do aluno
- **Informações Pessoais**: Dados básicos do aluno
- **Dados Acadêmicos**: Histórico escolar e notas
- **Frequência**: Registro de presenças e faltas
- **Dados Familiares**: Informações dos responsáveis
- **Observações**: Anotações sobre o aluno
- **Fotos**: Galeria de fotos do aluno
- **Edição**: Possibilidade de editar informações (se autorizado)

---

## 🎮 **Botões e Interações**
**Arquivo:** `botoes_gestor.js`

### Funcionalidades:
- **Navegação**: Controles de navegação entre páginas
- **Interações de Interface**: Manipulação de elementos da UI
- **Validações**: Verificações de formulários
- **Animações**: Efeitos visuais e transições
- **Responsividade**: Adaptação para diferentes dispositivos
- **Integração**: Conexão com outras funcionalidades

---

## 🔧 **Funcionalidades Gerais**

### Segurança:
- **Autenticação**: Sistema de login seguro
- **Autorização**: Controle de acesso por perfil
- **Sessão**: Gerenciamento de sessão do usuário

### Interface:
- **Design Responsivo**: Adaptação para mobile e desktop
- **Navegação Intuitiva**: Menu lateral e breadcrumbs
- **Feedback Visual**: Indicadores de carregamento e status
- **Acessibilidade**: Recursos para usuários com necessidades especiais

### Integração:
- **Banco de Dados**: Conexão com Supabase
- **APIs**: Integração com serviços externos
- **Sincronização**: Sincronização de dados em tempo real
- **Backup**: Sistema de backup automático

---

## 📱 **Compatibilidade**
- **Desktop**: Interface otimizada para computadores
- **Tablet**: Adaptação para tablets
- **Mobile**: Interface responsiva para smartphones
- **Navegadores**: Compatibilidade com principais navegadores

---

## 🔄 **Atualizações**
- **Tempo Real**: Dados atualizados automaticamente
- **Notificações Push**: Alertas em tempo real
- **Sincronização**: Dados sincronizados entre dispositivos
- **Cache**: Sistema de cache para melhor performance
