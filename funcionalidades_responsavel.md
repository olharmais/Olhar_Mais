# Funcionalidades do Perfil Responsável - OlharMais

## 📋 Visão Geral
O perfil **Responsável** é destinado a pais, mães, avós, tios e outros responsáveis legais pelos alunos. Possui acesso limitado apenas aos dados dos alunos sob sua responsabilidade, com foco no acompanhamento da frequência escolar e comunicação com a escola.

---

## 🏠 **Home (Dashboard Principal)**
**Arquivo:** `home_respo.html`

### Funcionalidades:
- **Dashboard Resumido**: Visualização de métricas dos alunos sob responsabilidade
- **Cards de Métricas**:
  - Total de escolas dos filhos
  - Total de turmas dos filhos
  - Total de alunos sob responsabilidade
  - Percentual de presença do dia
- **Stories/Notificações**: Visualização de stories em formato de círculos com vídeos das cidades
- **Lista de Alunos**: Cards individuais para cada aluno sob responsabilidade
- **Resumo de Frequência Mensal**: Para cada aluno:
  - Percentual de presença do mês atual
  - Dias presentes vs ausentes
  - Último registro de entrada/saída
- **Ações Rápidas**:
  - Link direto para verificar frequência de cada aluno
  - Link para ficha completa de cada aluno
  - Acesso ao relatório do responsável
- **Sistema de Permissões**: Acesso apenas aos alunos vinculados via tabela `permissoes_aluno`
- **Responsividade**: Interface adaptável para mobile e desktop

---

## 📹 **Câmeras**
**Arquivo:** `cameras_respo.html`

### Funcionalidades:
- **Visualização de Câmeras**: Acesso às câmeras das escolas dos filhos
- **Tipos de Visualização**:
  - **Câmeras da Cidade**: Câmeras SITE da cidade do responsável
  - **Câmeras das Escolas**: Câmeras ESCOLA das escolas dos filhos
  - **Veículos Escolares**: Monitoramento de veículos em tempo real
- **Filtros**:
  - Filtro por escola específica dos filhos
  - Seleção de tipo de visualização
- **Sistema de Veículos**:
  - Mapa em tempo real com localização dos veículos
  - Lista de veículos com status (ligado/desligado)
  - Velocidade em tempo real
  - Câmeras dos veículos (quando disponível)
  - Atualização automática a cada 30 segundos
- **Controles de Mapa**:
  - Centralizar mapa nos veículos
  - Atualizar dados dos veículos
- **Responsividade**: Interface otimizada para mobile

---

## 📊 **Frequência**
**Arquivo:** `frequencia_respo.html`

### Funcionalidades:
- **Seleção de Aluno**: Dropdown com todos os alunos sob responsabilidade
- **Informações do Aluno**:
  - Foto do aluno
  - Nome completo
  - Escola e turma
- **Registros de Frequência**:
  - Agrupamento por data
  - Horário de entrada (primeiro registro do dia)
  - Horário de saída (último registro do dia)
  - Formatação de data e hora em português
- **Estado Vazio**: Mensagem quando não há registros
- **Navegação**: Links diretos para cada aluno via URL
- **Responsividade**: Interface adaptável para mobile

---

## 📢 **Notificações/Comunicados**
**Arquivo:** `notificacoes_respo.html`

### Funcionalidades:
- **Recebimento de Comunicados**: Apenas recebe comunicados (não cria)
- **Filtros por Importância**:
  - 🟢 Informativos
  - 🟡 Importantes  
  - 🔴 Urgentes
  - Todos
- **Sistema de Leitura**:
  - Indicador visual de comunicados não lidos
  - Marcar como lido
  - Contador de visualizações
- **Filtro por Turma**: Recebe apenas comunicados das turmas dos filhos
- **Detalhes do Comunicado**:
  - Título e conteúdo
  - Autor e data
  - Nível de importância
  - Lista de visualizações
- **Responsividade**: Interface otimizada para mobile

---

## 👤 **Perfil**
**Arquivo:** `perfil_respo.html`

### Funcionalidades:
- **Dados Pessoais**:
  - Nome completo (editável)
  - WhatsApp (com verificação)
- **Foto de Perfil**:
  - Upload de nova foto
  - Preview em tempo real
  - Validação de formato e tamanho
- **Sistema de Verificação WhatsApp**:
  - Verificação do número atual
  - Alteração para novo número
  - Códigos de verificação via WhatsApp
  - Validação de duplicidade
- **Validações**:
  - Verificação de números já cadastrados
  - Máscara automática de telefone
  - Validação de formato de imagem
- **Responsividade**: Interface adaptável para mobile

---

## 📋 **Ficha do Aluno**
**Arquivo:** `ficha_aluno.html`

### Funcionalidades:
- **Informações Completas do Aluno**:
  - Foto do aluno
  - Nome completo
  - Registro do aluno
  - Escola, cidade, série, turma e período
  - Contatos dos responsáveis
- **Registros de Frequência**:
  - Filtro por mês
  - Tabela com entrada e saída por dia
  - Formatação de data e hora
  - Agrupamento por data
- **Funcionalidades de Impressão**:
  - Botão de impressão
  - Estilos otimizados para impressão
  - Quebra de página adequada
- **Navegação**: Acesso via URL com ID do aluno
- **Responsividade**: Interface adaptável para mobile

---

## 📄 **Relatório do Responsável**
**Arquivo:** `relatorio_responsavel.html`

### Funcionalidades:
- **Seleção de Parâmetros**:
  - Dropdown com alunos sob responsabilidade
  - Seleção de período (data início e fim)
- **Relatório Completo**:
  - Cabeçalho com informações da escola
  - Dados do aluno selecionado
  - Tabela de registros de entrada/saída
  - Resumo estatístico do período
- **Estatísticas**:
  - Total de dias com presença
  - Total de entradas
  - Total de saídas
- **Funcionalidades de Impressão**:
  - Layout otimizado para impressão
  - Estilos profissionais
  - Quebra de página adequada
- **Metodologia**: Entrada = primeiro registro do dia, Saída = último registro
- **Responsividade**: Interface adaptável para mobile

---

## 🧭 **Navegação**
**Arquivo:** `navbar_respo.html` e `botoes_respo.js`

### Funcionalidades:
- **Barra de Navegação Mobile**:
  - Início (Home)
  - Frequência
  - Perfil
  - Sair
- **Sistema Duplo**:
  - Iframe com navbar (fallback)
  - JavaScript alternativo (principal)
- **Indicador Ativo**: Marcação visual da página atual
- **Responsividade**: Ocultar em desktop, mostrar em mobile
- **Logout**: Limpeza de sessão e redirecionamento

---

## 🔧 **Funcionalidades Gerais**

### **Sistema de Autenticação**:
- Verificação de tipo de usuário (RESPONSÁVEL)
- Redirecionamento automático se não autorizado
- Sessão persistente via local.

### **Sistema de Permissões**:
- Acesso apenas aos alunos vinculados via `permissoes_aluno`
- Filtro automático de dados por responsabilidade
- Segurança por nível de acesso

### **Integração com APIs**:
- Supabase para dados
- API Fulltrack para veículos
- API WhatsApp para verificação

### **Responsividade**:
- Design mobile-first
- Adaptação para diferentes tamanhos de tela
- Suporte a PWA (Progressive Web App)

### **Sistema de Notificações**:
- Toast notifications
- Feedback visual para ações
- Mensagens de erro e sucesso

### **Compatibilidade**:
- Navegadores modernos
- Suporte a iOS e Android
- Modo standalone (PWA)

---

## 📱 **Características Específicas do Responsável**

### **Acesso Limitado**:
- Apenas aos alunos sob sua responsabilidade
- Não pode criar comunicados
- Não tem acesso administrativo

### **Foco na Frequência**:
- Acompanhamento detalhado da presença
- Relatórios personalizados
- Histórico completo de entrada/saída

### **Comunicação Unidirecional**:
- Recebe comunicados da escola
- Não pode enviar comunicados
- Filtro por turma dos filhos

### **Monitoramento Visual**:
- Câmeras das escolas dos filhos
- Veículos escolares em tempo real
- Stories com conteúdo da cidade

### **Gestão de Perfil**:
- Dados pessoais editáveis
- Verificação de WhatsApp
- Upload de foto de perfil

---

## 🔒 **Segurança e Privacidade**

### **Controle de Acesso**:
- Verificação de tipo de usuário
- Filtro automático de dados
- Redirecionamento em caso de acesso não autorizado

### **Proteção de Dados**:
- Acesso apenas aos alunos vinculados
- Dados sensíveis protegidos
- Sessão segura

### **Validações**:
- Verificação de números de WhatsApp
- Validação de formatos de arquivo
- Controle de duplicidade

---

## 📊 **Resumo das Funcionalidades**

| Funcionalidade | Descrição | Acesso |
|----------------|-----------|---------|
| **Dashboard** | Visão geral dos filhos | ✅ Completo |
| **Câmeras** | Monitoramento visual | ✅ Limitado às escolas dos filhos |
| **Frequência** | Acompanhamento de presença | ✅ Por aluno |
| **Comunicados** | Recebimento de mensagens | ✅ Apenas recebe |
| **Perfil** | Gestão de dados pessoais | ✅ Próprio perfil |
| **Ficha** | Dados completos do aluno | ✅ Por aluno |
| **Relatório** | Relatórios personalizados | ✅ Por aluno |
| **Navegação** | Sistema de navegação | ✅ Completo |

---

## 🎯 **Objetivo do Perfil**

O perfil **Responsável** foi projetado para permitir que pais e responsáveis acompanhem de forma segura e eficiente a vida escolar de seus filhos, com acesso limitado apenas aos dados necessários e funcionalidades focadas no acompanhamento da frequência e comunicação com a escola.
