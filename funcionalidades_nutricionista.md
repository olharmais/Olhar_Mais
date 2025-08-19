# Funcionalidades do Perfil Nutricionista - OlharMais

## 📋 Visão Geral
O perfil **Nutricionista** é destinado a profissionais de nutrição que trabalham no sistema educacional. Possui acesso aos dados das escolas e alunos para acompanhamento nutricional e frequência escolar.

---

## 🏠 **Home (Dashboard Principal)**
**Arquivo:** `home_nutri.html`

### Funcionalidades:
- **Dashboard Resumido**: Visualização de métricas gerais das escolas
- **Cards de Métricas**:
  - Total de escolas
  - Total de turmas  
  - Total de alunos
  - Percentual de presença do dia
- **Stories/Notificações**: Visualização de stories em formato de círculos
- **Ações Rápidas**:
  - Link direto para verificar frequência
- **Resumo por Escola**: Cards individuais com dados de cada escola
- **Navegação Principal**: Acesso a todas as seções do sistema
- **Menu Lateral**: Navegação entre funcionalidades
- **Responsividade**: Interface adaptável para mobile e desktop

---

## 🔔 **Notificações**
**Arquivo:** `notificacoes_nutri.html`

### Funcionalidades:
- **Lista de Notificações**: Visualização de todas as notificações
- **Abas**:
  - Recebidos
  - Enviados (se autorizado)
- **Filtros**:
  - Por tipo de notificação (informativo, importante, urgente)
  - Por escola
  - Por data
- **Status de Leitura**: Marcação de notificações lidas/não lidas
- **Ações**:
  - Marcar como lida
  - Excluir notificação (apenas próprias)
  - Responder notificação
- **Criar Notificações**:
  - Formulário de criação
  - Seleção de destinatários
  - Tipos de envio (todos de uma profissão, usuários específicos)
  - Níveis de importância
- **Visualizações**: Controle de quem leu as notificações enviadas
- **Notificações em Tempo Real**: Atualização automática

---

## 📊 **Frequência**
**Arquivo:** `frequencia_nutri.html`

### Funcionalidades:
- **Seleção de Escola**: Dropdown para escolher escola específica
- **Calendário de Dias**: Visualização de dias com registros de frequência
- **Filtros**:
  - Mostrar/ocultar fins de semana
  - Filtro por data
- **Métricas Detalhadas**:
  - Alunos presentes
  - Alunos ausentes
  - Total de alunos
  - Percentual de presença
- **Gráfico Circular**: Visualização da porcentagem de presença
- **Navegação por Etapas**:
  - Etapa 1: Seleção de escola
  - Etapa 2: Seleção de data
  - Etapa 3: Visualização de métricas
- **Interface Responsiva**: Adaptável para mobile e desktop

---

## 👤 **Perfil**
**Arquivo:** `perfil_nutri.html`

### Funcionalidades:
- **Dados Pessoais**: Visualização e edição de informações pessoais
- **Foto de Perfil**: Upload e gerenciamento de foto
- **Alteração de WhatsApp**: Sistema de verificação em duas etapas
  - Verificação do número atual
  - Inserção do novo número
  - Verificação do novo número
- **Campos Editáveis**:
  - Nome completo
  - Número de WhatsApp
- **Validações**:
  - Verificação de número já cadastrado
  - Validação de formato de WhatsApp
- **Upload de Foto**:
  - Suporte a diferentes formatos de imagem
  - Limite de tamanho (5MB)
  - Preview em tempo real
- **Configurações de Conta**: Preferências do usuário
- **Logout**: Encerramento de sessão

---

## 👨‍🎓 **Ficha do Aluno**
**Arquivo:** `ficha_aluno.html`

### Funcionalidades:
- **Visualização de Ficha**: Acesso completo aos dados do aluno
- **Informações Pessoais**: Dados básicos do aluno
- **Dados Acadêmicos**: 
  - Registro do aluno
  - Escola
  - Cidade
  - Série
  - Turma
  - Período
- **Dados Familiares**: Informações dos responsáveis
  - Contato 1 (WhatsApp)
  - Contato 2 (WhatsApp)
- **Registros de Frequência**: 
  - Tabela detalhada de presenças
  - Filtro por mês
  - Horários de entrada e saída
  - Dias da semana
- **Fotos**: Foto do aluno
- **Impressão**: Funcionalidade de impressão da ficha
- **Navegação**: Botão voltar para página anterior

---

## 🎮 **Botões e Interações**
**Arquivo:** `botoes_nutri.js`

### Funcionalidades:
- **Navegação**: Controles de navegação entre páginas
- **Barra de Navegação Mobile**: 
  - Início
  - Frequência
  - Perfil
  - Sair
- **Interações de Interface**: Manipulação de elementos da UI
- **Validações**: Verificações de formulários
- **Animações**: Efeitos visuais e transições
- **Responsividade**: Adaptação para diferentes dispositivos
- **Integração**: Conexão com outras funcionalidades
- **Logout**: Função de limpeza de sessão

---

## 🧭 **Navegação**
**Arquivo:** `navbar_nutri.html`

### Funcionalidades:
- **Menu Mobile**: Barra de navegação fixa na parte inferior
- **Itens de Menu**:
  - Início (home_nutri.html)
  - Frequência (frequencia_nutri.html)
  - Perfil (perfil_nutri.html)
  - Sair (logout)
- **Indicador Ativo**: Marcação da página atual
- **Design Responsivo**: Ocultação em telas maiores
- **Compatibilidade PWA**: Suporte a safe-area-inset

---

## 🔧 **Funcionalidades Gerais**

### Segurança:
- **Autenticação**: Sistema de login seguro
- **Autorização**: Controle de acesso por perfil (NUTRICIONISTA)
- **Sessão**: Gerenciamento de sessão do usuário
- **Verificação de WhatsApp**: Sistema de códigos de verificação

### Interface:
- **Design Responsivo**: Adaptação para mobile e desktop
- **Navegação Intuitiva**: Menu lateral e breadcrumbs
- **Feedback Visual**: Indicadores de carregamento e status
- **Acessibilidade**: Recursos para usuários com necessidades especiais
- **PWA**: Suporte a Progressive Web App

### Integração:
- **Banco de Dados**: Conexão com Supabase
- **APIs**: Integração com serviços externos
- **WhatsApp API**: Envio de códigos de verificação
- **.**: Upload de fotos de perfil
- **Sincronização**: Sincronização de dados em tempo real

### Permissões:
- **Acesso por Cidade**: Nutricionistas podem ter acesso a todas as escolas de uma cidade
- **Acesso por Escola**: Acesso específico a escolas determinadas
- **Acesso por Turma**: Acesso apenas às turmas permitidas
- **Hierarquia**: Sistema de permissões baseado em hierarquia profissional

---

## 📱 **Compatibilidade**
- **Desktop**: Interface otimizada para computadores
- **Tablet**: Adaptação para tablets
- **Mobile**: Interface responsiva para smartphones
- **Navegadores**: Compatibilidade com principais navegadores
- **PWA**: Funcionalidade offline e instalação como app

---

## 🔄 **Atualizações**
- **Tempo Real**: Dados atualizados automaticamente
- **Notificações Push**: Alertas em tempo real
- **Sincronização**: Dados sincronizados entre dispositivos
- **Cache**: Sistema de cache para melhor performance
- **Stories**: Sistema de stories com vídeos das cidades

---

## 📊 **Relatórios e Métricas**
- **Dashboard de Frequência**: Métricas detalhadas de presença
- **Gráficos Visuais**: Representação gráfica de dados
- **Filtros Temporais**: Seleção de períodos específicos
- **Exportação**: Funcionalidade de impressão de relatórios
- **Histórico**: Acesso a dados históricos de frequência

---

## 🔔 **Sistema de Notificações**
- **Recebimento**: Visualização de notificações recebidas
- **Envio**: Criação e envio de notificações (se autorizado)
- **Tipos**: Informativo, Importante, Urgente
- **Destinatários**: Seleção específica de usuários ou profissões
- **Rastreamento**: Controle de visualizações das notificações enviadas
