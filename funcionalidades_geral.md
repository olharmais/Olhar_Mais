# Funcionalidades do Sistema Geral - OlharMais

## 📋 Visão Geral
O **Sistema Geral** é o ponto de entrada principal do OlharMais, responsável pela autenticação, cadastro e navegação inicial de todos os usuários. Possui funcionalidades de login, registro e redirecionamento para os diferentes perfis do sistema.

---

## 🏠 **Página Inicial (Landing Page)**
**Arquivo:** `index.html`

### Funcionalidades:
- **Landing Page Responsiva**: Interface adaptável para mobile e desktop
- **Design Moderno**: Gradiente azul com elementos flutuantes animados
- **Logo Interativo**: Logo clicável com easter egg (5 cliques redirecionam para vendas)
- **Botões de Ação**:
  - "Nova Conta" - Redireciona para cadastro
  - "Acessar Conta" - Redireciona para login
- **Elementos Visuais**:
  - Ícone de olho animado
  - Quadrados flutuantes coloridos (cores do Google)
  - Efeitos de glass morphism
- **Botão de Suporte Flutuante**: 
  - Botão verde com ícone do WhatsApp
  - Número de suporte carregado da tabela "geral" campo "suporte"
  - Posicionamento fixo na tela (canto inferior direito)
  - Efeito hover com texto "Suporte"
  - Link direto para WhatsApp
- **PWA Ready**: Suporte a Progressive Web App
- **Cookie Consent**: Banner de aceitação de cookies
- **SEO Otimizado**: Meta tags para redes sociais

---

## 🔐 **Sistema de Autenticação**
**Arquivo:** `auth.html`

### Funcionalidades:

#### **Interface de Login/Cadastro**:
- **Sistema de Abas**: Alternância entre login e cadastro
- **Design Responsivo**: Interface adaptável para mobile
- **Validações em Tempo Real**: Feedback visual para campos
- **Loading States**: Indicadores de carregamento
- **Toast Notifications**: Mensagens de sucesso e erro

#### **Login**:
- **Autenticação por WhatsApp**: Sistema de código via WhatsApp
- **Campo de Telefone**: Com máscara automática
- **Código de Verificação**: 6 dígitos enviados via WhatsApp
- **Validação de Usuário**: Verificação de existência e status
- **Redirecionamento Inteligente**: Baseado no tipo de usuário
- **Bypass Administrativo**: Código especial para administradores

#### **Cadastro**:
- **Seleção de Perfil**: 3 tipos disponíveis (Gestor, Nutricionista, Profissional)
- **Verificação WhatsApp**: Código de confirmação via WhatsApp
- **Dados Pessoais**:
  - Foto de perfil (upload opcional)
  - Nome e sobrenome
  - Seleção de cidade e escola
  - Sexo (Masculino/Feminino/Outro)
- **Validações**:
  - Campos obrigatórios
  - Verificação de usuário existente
  - Validação de formato de imagem
- **Upload de Foto**: Integração com Supabase .
- **Notificação Administrativa**: Mensagem automática para admin

#### **Sistema de Verificação**:
- **Códigos de 6 Dígitos**: Gerados aleatoriamente
- **Expiração**: 15 minutos para códigos de cadastro
- **Interface de Digitação**: 6 campos individuais
- **Navegação por Teclado**: Setas e backspace
- **Colar Código**: Suporte a colagem completa

#### **Integração com APIs**:
- **Supabase**: Cliente configurado via Lambda
- **WhatsApp API**: Envio de mensagens automático
- **.**: Upload de fotos de perfil
- **Configurações**: Carregamento via Lambda

---

## ⏳ **Página de Aprovação**
**Arquivo:** `aprovacao.html`

### Funcionalidades:
- **Tela de Aguardando**: Interface informativa para usuários pendentes
- **Design Consistente**: Mesmo estilo visual do sistema
- **Ícone Animado**: Ampulheta com animação pulse
- **Mensagem Clara**: Explicação do status de aprovação
- **Botão de Retorno**: Link para voltar ao login
- **Responsividade**: Adaptável para mobile e desktop

---

## 🔧 **Funcionalidades Técnicas**

### **Sistema de Configuração**:
- **Lambda AWS**: Carregamento de configurações sensíveis
- **Cliente Supabase**: Configuração automática
- **APIs WhatsApp**: Credenciais seguras
- **Fallback**: Tratamento de erros de carregamento

### **Sistema de Sessão**:
- **local.**: Armazenamento persistente
- **session.**: Dados temporários
- **Hash de Sessão**: Geração segura de tokens
- **Expiração**: Controle de validade de sessão

### **Sistema de Redirecionamento**:
- **Verificação de Sessão**: Controle automático de login
- **Redirecionamento por Tipo**: Baseado no perfil do usuário
- **URLs Dinâmicas**: Parâmetros de tipo de acesso
- **Fallback**: Redirecionamento padrão

### **Integração com Banco**:
- **Tabela `usuarios`**: Dados principais dos usuários
- **Tabela `cidades`**: Lista de cidades disponíveis
- **Tabela `escolas`**: Escolas por cidade
- **Tabela `geral`**: Configurações do sistema (incluindo suporte)

---

## 📱 **Interface e UX**

### **Design System**:
- **Tailwind CSS**: Framework de estilização
- **Inter Font**: Tipografia moderna
- **Phosphor Icons**: Ícones consistentes
- **Cores Primárias**: Azul (#005ae2) como cor principal

### **Responsividade**:
- **Mobile-First**: Design otimizado para mobile
- **Breakpoints**: Adaptação para diferentes telas
- **Touch-Friendly**: Botões e controles adequados
- **PWA**: Suporte a instalação como app

### **Animações**:
- **CSS Animations**: Efeitos suaves
- **Loading States**: Indicadores visuais
- **Transições**: Mudanças de estado fluidas
- **Floating Elements**: Elementos flutuantes animados

---

## 🔒 **Segurança e Validação**

### **Autenticação**:
- **Hash Seguro**: Geração de tokens criptográficos
- **Validação de Códigos**: Verificação de códigos temporários
- **Controle de Sessão**: Gerenciamento seguro de login
- **Logout Completo**: Limpeza de todos os dados

### **Validações**:
- **Campos Obrigatórios**: Verificação de preenchimento
- **Formato de Telefone**: Máscara e validação
- **Códigos de Verificação**: Validação de 6 dígitos
- **Upload de Imagens**: Verificação de formato e tamanho

### **Proteção de Dados**:
- **Configurações Seguras**: Carregamento via Lambda
- **APIs Protegidas**: Credenciais não expostas
- **Dados Sensíveis**: Armazenamento seguro
- **Cookie Consent**: Conformidade com LGPD

---

## 📊 **Resumo das Funcionalidades**

| Funcionalidade | Descrição | Status |
|----------------|-----------|---------|
| **Landing Page** | Página inicial com design moderno | ✅ Completo |
| **Login** | Autenticação por WhatsApp | ✅ Completo |
| **Cadastro** | Registro de novos usuários | ✅ Completo |
| **Verificação** | Sistema de códigos | ✅ Completo |
| **Aprovação** | Tela de aguardando aprovação | ✅ Completo |
| **Suporte** | Botão flutuante com WhatsApp | ✅ Completo |
| **Redirecionamento** | Navegação inteligente | ✅ Completo |
| **PWA** | Suporte a Progressive Web App | ✅ Completo |

---

## 🎯 **Objetivo do Sistema**

O **Sistema Geral** serve como ponto de entrada e controle central do OlharMais, fornecendo uma experiência de usuário fluida e segura para autenticação, cadastro e navegação inicial, com suporte completo a diferentes tipos de usuários e integração com todas as funcionalidades do sistema.

---

## 🔄 **Fluxo de Usuário**

1. **Acesso**: Usuário acessa a página inicial
2. **Escolha**: Decide entre nova conta ou login
3. **Autenticação**: Processo de verificação via WhatsApp
4. **Validação**: Verificação de dados e permissões
5. **Redirecionamento**: Navegação para perfil específico
6. **Suporte**: Acesso direto ao suporte via WhatsApp

---

## 📋 **Requisitos Técnicos**

### **Dependências**:
- Supabase (banco de dados)
- Tailwind CSS (estilização)
- Phosphor Icons (ícones)
- WhatsApp API (mensagens)

### **APIs Integradas**:
- Supabase Client
- Supabase .
- WhatsApp Business API
- AWS Lambda (configurações)

### **Compatibilidade**:
- Navegadores modernos
- Dispositivos móveis
- PWA (Progressive Web App)
- iOS e Android

---

## 🆘 **Sistema de Suporte**

### **Botão Flutuante**:
- **Posicionamento**: Fixo na tela
- **Cor**: Verde (#22c55e)
- **Ícone**: WhatsApp
- **Funcionalidade**: Abre WhatsApp direto

### **Integração**:
- **Fonte de Dados**: Tabela "geral" campo "suporte"
- **Formato**: Número com código 55
- **Abertura**: Link direto para WhatsApp
- **Responsividade**: Adaptável para mobile

### **Implementação**:
```javascript
// Carregamento do número de suporte
const { data: suporte } = await supabase
    .from('geral')
    .select('suporte')
    .single();

// Botão flutuante
<a href="https://wa.me/SUPORTE_NUMBER" 
   class="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
    <i class="ph ph-whatsapp-logo text-xl"></i>
</a>
```
