# Funcionalidades - Sistema OlharMais

## 📋 Visão Geral

O **OlharMais** é uma plataforma completa de gestão escolar e segurança de alunos, desenvolvida para atender diferentes perfis de usuários no ambiente educacional. Cada perfil possui funcionalidades específicas e níveis de acesso adequados às suas necessidades.

---

## 🏠 Sistema Geral

### Visão Geral
O **Sistema Geral** é o ponto de entrada principal do OlharMais, responsável pela autenticação, cadastro e navegação inicial de todos os usuários. Possui funcionalidades de login, registro e redirecionamento para os diferentes perfis do sistema.

### Página Inicial (Landing Page)
**Arquivo:** `index.html`

**Funcionalidades:**
- ✅ **Landing Page Responsiva:** Interface adaptável para mobile e desktop
- ✅ **Design Moderno:** Gradiente azul com elementos flutuantes animados
- ✅ **Logo Interativo:** Logo clicável com easter egg (5 cliques redirecionam para vendas)
- ✅ **Botões de Ação:** "Nova Conta" e "Acessar Conta"
- ✅ **Elementos Visuais:** Ícone de olho animado, quadrados flutuantes
- ✅ **Botão de Suporte Flutuante:** WhatsApp com número da tabela "geral"
- ✅ **PWA Ready:** Suporte a Progressive Web App
- ✅ **Cookie Consent:** Banner de aceitação de cookies

### Sistema de Autenticação
**Arquivo:** `auth.html`

#### Login
- • Autenticação por WhatsApp
- • Campo de telefone com máscara
- • Código de verificação (6 dígitos)
- • Redirecionamento inteligente
- • Bypass administrativo

#### Cadastro
- • Seleção de perfil (3 tipos)
- • Verificação WhatsApp
- • Upload de foto de perfil
- • Dados pessoais completos
- • Notificação administrativa

### Página de Aprovação
**Arquivo:** `aprovacao.html`
- ⏳ Tela de aguardando aprovação
- ⏳ Ícone animado (ampulheta)
- ⏳ Mensagem clara sobre status
- ⏳ Botão para voltar ao login

### Funcionalidades Técnicas

#### Configuração
- • Lambda AWS
- • Cliente Supabase
- • APIs WhatsApp
- • Sistema de fallback

#### Sessão
- • local.
- • session.
- • Hash de sessão
- • Controle de expiração

#### Banco de Dados
- • Tabela usuarios
- • Tabela cidades
- • Tabela escolas
- • Tabela geral

### Resumo das Funcionalidades

| Funcionalidade | Descrição | Status |
|---|---|---|
| **Landing Page** | Página inicial com design moderno | ✅ Completo |
| **Login** | Autenticação por WhatsApp | ✅ Completo |
| **Cadastro** | Registro de novos usuários | ✅ Completo |
| **Verificação** | Sistema de códigos | ✅ Completo |
| **Aprovação** | Tela de aguardando aprovação | ✅ Completo |
| **Suporte** | Botão flutuante com WhatsApp | ✅ Completo |

---

## 👑 Perfil Gestor

### Visão Geral
O perfil **Gestor** é destinado a **Prefeitos** e **Secretários** que gerenciam o sistema educacional de uma cidade. Possui acesso completo aos dados das escolas, alunos e funcionalidades administrativas.

### Funcionalidades Principais

#### Home (Dashboard)
- • Métricas gerais da cidade
- • Cards de escolas/turmas/alunos
- • Stories/Notificações
- • Percentual de presença

#### Câmeras
- • Todas as escolas
- • Streaming em tempo real
- • Controles de captura
- • Status online/offline

#### Frequência
- • Filtros por escola/turma
- • Tabela detalhada
- • Estatísticas de presença
- • Exportação de dados

#### Métricas
- • Indicadores educacionais
- • Gráficos interativos
- • Comparativos entre escolas
- • Filtros temporais

#### Relatórios
- • Relatórios personalizados
- • Múltiplos formatos (PDF, Excel)
- • Agendamento automático
- • Histórico de relatórios

#### Notificações
- • Criar notificações
- • Filtros avançados
- • Agendamento de envio
- • Status de leitura

### Arquivos Principais
- `gestor/home_gestor.html` - Dashboard principal
- `gestor/cameras_gestor.html` - Visualização de câmeras
- `gestor/frequencia_gestor.html` - Controle de frequência
- `gestor/metricas_gestor.html` - Análises e gráficos
- `gestor/relatorio_gestor.html` - Geração de relatórios
- `gestor/notificacoes_gestor.html` - Sistema de comunicação
- `gestor/criar_notificacao.html` - Criação de conteúdo
- `gestor/perfil_gestor.html` - Gerenciamento de perfil
- `gestor/ficha_aluno.html` - Visualização de dados do aluno

---

## 🍎 Perfil Nutricionista

### Visão Geral
O perfil **Nutricionista** é destinado a profissionais de nutrição que acompanham a frequência escolar e o bem-estar nutricional dos alunos.

### Funcionalidades Principais

#### Dashboard
- • Métricas das escolas
- • Stories/Notificações
- • Resumo por escola
- • Ações rápidas

#### Frequência
- • Calendário de dias
- • Métricas detalhadas
- • Gráfico circular
- • Navegação por etapas

#### Notificações
- • Receber/Enviar
- • Filtros por tipo
- • Status de leitura
- • Tempo real

#### Perfil
- • Dados pessoais
- • Verificação WhatsApp
- • Upload de foto
- • Configurações

### Arquivos Principais
- `nutricionista/home_nutri.html` - Dashboard principal
- `nutricionista/frequencia_nutri.html` - Controle de frequência
- `nutricionista/notificacoes_nutri.html` - Sistema de comunicação
- `nutricionista/perfil_nutri.html` - Gerenciamento de perfil
- `nutricionista/ficha_aluno.html` - Visualização de dados do aluno

---

## 🎓 Perfil Profissional

### Visão Geral
O perfil **Profissional** é destinado a **Professores** e **Coordenadores** educacionais que trabalham diretamente com os alunos e turmas.

### Funcionalidades Principais

#### Dashboard Avançado
- • 3 views rotativas
- • Métricas em tempo real
- • Alunos críticos
- • Rotação automática

#### Assistente IA
- • Chat inteligente
- • Consultas de frequência
- • Análises automáticas
- • Contexto personalizado

#### Câmeras
- • Escolas permitidas
- • Filtros por turma
- • Layout responsivo
- • Controles intuitivos

### Funcionalidades Exclusivas
- 🎓 Dashboard com 3 views rotativas
- 🎓 Assistente IA para consultas
- 🎓 Acesso às câmeras das escolas
- 📊 Ficha completa dos alunos
- 📊 Sistema de notificações
- 📊 Navegação mobile otimizada

### Arquivos Principais
- `profissional/home_profi.html` - Dashboard principal
- `profissional/dashboard_profi.html` - Dashboard avançado
- `profissional/ia_profi.html` - Assistente IA
- `profissional/cameras_profi.html` - Visualização de câmeras
- `profissional/frequencia_profi.html` - Controle de frequência
- `profissional/notificacoes_profi.html` - Sistema de comunicação
- `profissional/perfil_profi.html` - Gerenciamento de perfil
- `profissional/ficha_aluno.html` - Visualização de dados do aluno

---

## 💝 Perfil Responsável

### Visão Geral
O perfil **Responsável** é destinado a **Pais** e **Responsáveis** pelos alunos, permitindo acompanhar a frequência e comunicação escolar.

### Funcionalidades Principais

#### Dashboard
- • Métricas dos filhos
- • Lista de alunos
- • Frequência mensal
- • Ações rápidas

#### Câmeras & Veículos
- • Câmeras das escolas
- • Veículos em tempo real
- • Mapa interativo
- • Atualização automática

#### Frequência
- • Por aluno
- • Entrada e saída
- • Registros detalhados
- • Navegação direta

#### Comunicados
- • Apenas recebe
- • Filtros por importância
- • Status de leitura
- • Por turma dos filhos

### Características Específicas

#### Acesso Limitado
- 👨‍👩‍👧‍👦 Apenas aos filhos sob responsabilidade
- 👨‍👩‍👧‍👦 Comunicação unidirecional (só recebe)
- 👨‍👩‍👧‍👦 Relatórios personalizados por aluno

#### Monitoramento
- 📱 Veículos escolares em tempo real
- 📱 Câmeras das escolas dos filhos
- 📱 Histórico completo de frequência

### Arquivos Principais
- `responsavel/home_respo.html` - Dashboard principal
- `responsavel/cameras_respo.html` - Visualização de câmeras e veículos
- `responsavel/frequencia_respo.html` - Controle de frequência
- `responsavel/notificacoes_respo.html` - Sistema de comunicação
- `responsavel/perfil_respo.html` - Gerenciamento de perfil
- `responsavel/ficha_aluno.html` - Visualização de dados do aluno
- `responsavel/relatorio_responsavel.html` - Relatórios personalizados

---

## 🎯 Perfil Estagiário

### Visão Geral
O perfil **Estagiário** é destinado a estagiários que realizam o cadastro e gestão de alunos no sistema.

### Funcionalidades Principais

#### Autenticação Especial
- 🔐 Login por código de acesso único
- 🔐 Controle de período (início e fim)
- 🔐 Status ativo verificado
- 🔐 Sessão segura temporária

#### Gestão de Alunos
- 👥 CRUD completo de alunos
- 👥 Upload e gestão de fotos
- 👥 Filtros avançados de busca
- 👥 Sincronização com dispositivos

### Funcionalidades Principais

#### Cadastro
- • Modal completo de cadastro
- • Dados pessoais e escolares
- • Upload de foto com preview
- • Validações em tempo real

#### Edição
- • Alteração de dados
- • Troca de turma/série
- • Atualização de foto
- • Marcação para dispositivo

#### Sincronização
- • Vinculação automática
- • Dispositivos ativos
- • Flag de atualização
- • Auditoria de cadastros

### Características Técnicas
- 🔧 Interface responsiva mobile-first
- 🔧 Grid adaptativo (2-5 colunas)
- 🔧 Sistema de filtros avançados
- 🔧 Integração com Supabase .
- 🔧 Toast notifications
- 🔧 Estados de loading e validação

### Arquivos Principais
- `estagiario_alunos.html` - Gestão principal de alunos
- `auth_estagiario.html` - Autenticação especial

---

## 📊 Resumo Executivo

### Estatísticas
- • 6 perfis de usuário
- • 25+ funcionalidades principais
- • Interface 100% responsiva
- • PWA com suporte offline

### Tecnologias
- • Supabase (Backend)
- • Tailwind CSS (UI)
- • WhatsApp API (Auth)
- • AWS Lambda (Config)

### Objetivos
- • Gestão escolar completa
- • Segurança de alunos
- • Comunicação eficiente
- • Monitoramento em tempo real

---

## 🔧 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (ES6+)** - Interatividade e lógica
- **Tailwind CSS** - Framework CSS utilitário
- **Phosphor Icons** - Biblioteca de ícones

### Backend
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Database
  - Real-time subscriptions
  - Authentication
  - .
- **AWS Lambda** - Configurações sensíveis
- **WhatsApp Business API** - Autenticação e notificações

### Bibliotecas e Ferramentas
- **HLS.js** - Streaming de vídeo
- **Leaflet.js** - Mapas interativos
- **Chart.js** - Visualização de dados
- **IMask.js** - Máscaras de input
- **RecordRTC.js** - Gravação de vídeo
- **Google Generative AI (Gemini)** - Assistente IA

### Funcionalidades Avançadas
- **PWA (Progressive Web App)** - Instalação e offline
- **Service Worker** - Cache e sincronização
- **WebRTC** - Comunicação em tempo real
- **WebSocket** - Atualizações em tempo real

---

## 📱 Responsividade e UX

### Design Mobile-First
- Interface otimizada para dispositivos móveis
- Navegação por gestos
- Cards adaptativos
- Grid responsivo

### Acessibilidade
- Contraste adequado
- Navegação por teclado
- Screen readers
- Alt text em imagens

### Performance
- Lazy loading de imagens
- Code splitting
- Minificação de assets
- CDN para recursos externos

---

## 🔒 Segurança

### Autenticação
- Verificação em duas etapas via WhatsApp
- Tokens JWT seguros
- Sessões com expiração
- Logout automático

### Autorização
- Controle de acesso por perfil
- Permissões granulares
- Validação de dados
- Sanitização de inputs

### Dados
- Criptografia em trânsito (HTTPS)
- Backup automático
- Auditoria de logs
- Conformidade LGPD

---

## 📈 Monitoramento e Analytics

### Métricas de Uso
- Usuários ativos
- Tempo de sessão
- Funcionalidades mais utilizadas
- Taxa de conversão

### Performance
- Tempo de carregamento
- Disponibilidade do sistema
- Erros e exceções
- Uso de recursos

### Relatórios
- Relatórios automáticos
- Dashboards em tempo real
- Exportação de dados
- Agendamento de relatórios

---

## 🚀 Deploy e Infraestrutura

### Hosting
- **Vercel** - Frontend deployment
- **Supabase** - Backend e banco de dados
- **AWS** - Serviços auxiliares

### CI/CD
- Deploy automático
- Testes automatizados
- Versionamento semântico
- Rollback automático

### Monitoramento
- Uptime monitoring
- Error tracking
- Performance monitoring
- User analytics

---

## 📞 Suporte e Manutenção

### Suporte Técnico
- Botão de suporte flutuante
- WhatsApp Business
- Documentação completa
- FAQ interativo

### Manutenção
- Atualizações automáticas
- Backup regular
- Monitoramento 24/7
- Escalabilidade automática

---

*Documentação gerada em: {{ data_atual }}*

**OlharMais** - Transformando a gestão educacional com tecnologia e segurança
