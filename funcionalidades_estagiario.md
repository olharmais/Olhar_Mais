# Funcionalidades do Perfil Estagiário - OlharMais

## 📋 Visão Geral
O perfil **Estagiário** é destinado a estagiários que trabalham nas escolas para cadastrar e gerenciar alunos. Possui acesso limitado apenas à escola onde está lotado, com foco no cadastro, edição e gestão de alunos.

---

## 🔐 **Autenticação**
**Arquivo:** `auth_estagiario.html`

### Funcionalidades:
- **Login por Código de Acesso**: Sistema de autenticação via código único
- **Validação de Acesso**:
  - Verificação de código de acesso válido
  - Controle de período de acesso (data início e data limite)
  - Verificação de status ativo do estagiário
- **Sistema de Sessão**:
  - Armazenamento seguro de dados na session.
  - Redirecionamento automático se já logado
  - Limpeza de sessão no logout
- **Interface de Login**:
  - Design responsivo e moderno
  - Feedback visual de erros
  - Loading states durante autenticação
- **Validações**:
  - Código obrigatório
  - Verificação de período de acesso
  - Tratamento de erros de autenticação

---

## 👥 **Gestão de Alunos**
**Arquivo:** `estagiario_alunos.html`

### Funcionalidades:

#### **Dashboard Principal**:
- **Header Fixo**: Nome da escola e controles principais
- **Contadores**: Total de alunos e alunos exibidos
- **Grid de Alunos**: Visualização em cards dos alunos da escola
- **Painel de Filtros**: Sistema de filtros avançados

#### **Sistema de Filtros**:
- **Filtro por Turma**: Seleção de turmas específicas
- **Busca por Nome**: Pesquisa textual de alunos
- **Filtro de Fotos**: Mostrar apenas alunos sem foto
- **Painel Deslizante**: Interface responsiva para filtros

#### **Cadastro de Alunos**:
- **Modal de Cadastro**: Interface completa para novo aluno
- **Informações Escolares**:
  - Seleção de turma (agrupadas por série)
  - Registro do aluno (RA)
  - Associação automática com série
- **Dados Pessoais**:
  - Nome completo
  - Data de nascimento (com máscara e validação)
  - Sexo (Masculino/Feminino)
- **Foto do Aluno**:
  - Upload de imagem
  - Preview em tempo real
  - Validação de formato
- **Validações**:
  - Campos obrigatórios
  - Validação de data de nascimento
  - Verificação de formato de imagem

#### **Edição de Alunos**:
- **Modal de Edição**: Interface para alterar dados
- **Campos Editáveis**:
  - Informações escolares
  - Dados pessoais
  - Turma e série
- **Validações**: Mesmas validações do cadastro
- **Sincronização**: Marcação para atualização no dispositivo

#### **Exclusão de Alunos**:
- **Modal de Confirmação**: Confirmação antes da exclusão
- **Exclusão Completa**:
  - Remoção de registros relacionados
  - Exclusão de foto do .
  - Limpeza de dados em `aluno_dispositivo`
- **Segurança**: Confirmação obrigatória

#### **Gestão de Fotos**:
- **Alteração de Foto**: Botão direto no card do aluno
- **Upload Automático**: Integração com Supabase .
- **Sincronização**: Atualização automática nos dispositivos
- **Validação**: Verificação de fotos padrão

#### **Interface Responsiva**:
- **Grid Adaptativo**: 2-5 colunas conforme tamanho da tela
- **Cards de Aluno**:
  - Foto do aluno (ou placeholder)
  - Nome completo
  - Série e turma
  - Botões de ação (editar, excluir, alterar foto)
- **Estados Vazios**: Mensagem quando não há alunos

---

## 🔧 **Funcionalidades Técnicas**

### **Sistema de Autenticação**:
- **Verificação de Login**: Controle de sessão
- **Validação de Prazo**: Verificação de data limite
- **Redirecionamento**: Controle de acesso às páginas
- **Logout**: Limpeza completa de sessão

### **Integração com Banco de Dados**:
- **Supabase**: Cliente configurado via Lambda
- **Tabelas Principais**:
  - `estagiarios`: Dados do estagiário
  - `alunos`: Cadastro de alunos
  - `escolas`: Informações da escola
  - `turmas`: Turmas disponíveis
  - `series`: Séries escolares
  - `aluno_dispositivo`: Vinculação com dispositivos
  - `dispositivos`: Dispositivos da escola

### **Sistema de .**:
- **Bucket de Fotos**: Armazenamento de imagens dos alunos
- **Upload Automático**: Integração com Supabase .
- **URLs Públicas**: Geração automática de links
- **Exclusão**: Limpeza de arquivos ao excluir aluno

### **Sincronização com Dispositivos**:
- **Vinculação Automática**: Criação de registros em `aluno_dispositivo`
- **Flag de Atualização**: Marcação `mudar_no_dispositivo`
- **Dispositivos Ativos**: Apenas dispositivos com status ATIVO
- **Telefone do Estagiário**: Registro de quem cadastrou

---

## 📱 **Interface e UX**

### **Design Responsivo**:
- **Mobile-First**: Interface otimizada para dispositivos móveis
- **Grid Adaptativo**: Ajuste automático de colunas
- **Touch-Friendly**: Botões e controles adequados para toque

### **Feedback Visual**:
- **Loading States**: Indicadores de carregamento
- **Toast Notifications**: Mensagens de sucesso e erro
- **Validações Visuais**: Feedback em tempo real
- **Estados Vazios**: Mensagens quando não há dados

### **Navegação**:
- **Header Fixo**: Controles sempre acessíveis
- **Painel de Filtros**: Deslizante e responsivo
- **Modais**: Interfaces focadas para ações específicas

---

## 🔒 **Segurança e Controle de Acesso**

### **Autenticação**:
- **Código Único**: Sistema de códigos de acesso
- **Período Limitado**: Controle de data início e fim
- **Status Ativo**: Verificação de estagiário ativo
- **Sessão Segura**: Armazenamento em session.

### **Controle de Dados**:
- **Escola Específica**: Acesso apenas à escola lotado
- **Filtros Automáticos**: Dados filtrados por escola
- **Validações**: Verificações de integridade
- **Exclusão Segura**: Confirmação obrigatória

### **Integridade de Dados**:
- **Relacionamentos**: Manutenção de integridade referencial
- **Soft Delete**: Exclusão lógica quando aplicável
- **Auditoria**: Registro de quem cadastrou cada aluno
- **Sincronização**: Controle de atualizações nos dispositivos

---

## 📊 **Resumo das Funcionalidades**

| Funcionalidade | Descrição | Acesso |
|----------------|-----------|---------|
| **Autenticação** | Login por código de acesso | ✅ Completo |
| **Dashboard** | Visão geral dos alunos | ✅ Completo |
| **Cadastro** | Criação de novos alunos | ✅ Completo |
| **Edição** | Modificação de dados | ✅ Completo |
| **Exclusão** | Remoção de alunos | ✅ Completo |
| **Fotos** | Gestão de imagens | ✅ Completo |
| **Filtros** | Busca e filtros avançados | ✅ Completo |
| **Sincronização** | Atualização em dispositivos | ✅ Completo |

---

## 🎯 **Objetivo do Perfil**

O perfil **Estagiário** foi projetado para permitir que estagiários das escolas cadastrem e gerenciem alunos de forma eficiente e segura, com acesso limitado apenas à escola onde estão lotados e funcionalidades focadas na gestão completa do cadastro de alunos, incluindo fotos e sincronização com dispositivos de reconhecimento facial.

---

## 🔄 **Fluxo de Trabalho**

1. **Login**: Estagiário acessa com código único
2. **Dashboard**: Visualiza todos os alunos da escola
3. **Filtros**: Aplica filtros para encontrar alunos específicos
4. **Cadastro**: Adiciona novos alunos com foto
5. **Edição**: Modifica dados existentes
6. **Exclusão**: Remove alunos quando necessário
7. **Sincronização**: Dados são automaticamente sincronizados com dispositivos

---

## 📋 **Requisitos Técnicos**

### **Dependências**:
- Supabase (banco de dados)
- Tailwind CSS (estilização)
- Phosphor Icons (ícones)
- Toastify (notificações)

### **APIs Integradas**:
- Supabase Client
- Supabase .
- Lambda para configurações

### **Compatibilidade**:
- Navegadores modernos
- Dispositivos móveis
- PWA (Progressive Web App)
