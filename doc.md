# 📋 Resumo Geral da Plataforma OlharMais

O **OlharMais** é uma plataforma completa de gestão escolar e segurança que conecta escolas, alunos, responsáveis e profissionais da educação. Desenvolvida para modernizar o acompanhamento educacional, a plataforma oferece:

**🎯 Principais Funcionalidades:**
- **Monitoramento em Tempo Real**: Câmeras das escolas e veículos escolares
- **Controle de Frequência**: Sistema automatizado de presença com reconhecimento facial
- **Comunicação Integrada**: Notificações e comunicados entre escola e responsáveis
- **Gestão Completa**: Dashboard para gestores, professores e nutricionistas
- **Acompanhamento Familiar**: Acesso para pais acompanharem a vida escolar dos filhos

**👥 Perfis de Usuário:**
- **Gestor**: Prefeitos e secretários (acesso completo)
- **Nutricionista**: Profissionais de nutrição escolar
- **Profissional**: Professores e coordenadores
- **Estagiário**: Cadastro e gestão de alunos
- **Responsável**: Pais e responsáveis pelos alunos

**🔒 Segurança e Tecnologia:**
- Autenticação via WhatsApp
- Dados protegidos e criptografados
- Interface responsiva (mobile e desktop)
- Integração com APIs modernas

---

📋 Visão Geral

O Sistema Geral é o ponto de entrada principal do OlharMais, responsável pela autenticação, cadastro e navegação inicial de todos os usuários. Possui funcionalidades de login, registro e redirecionamento para os diferentes perfis do sistema.

🏠 Página Inicial (Landing Page)
Funcionalidades:

Landing Page Responsiva: Interface adaptável para mobile e desktop
Design Moderno: Gradiente azul com elementos flutuantes animados
Logo Interativo: Logo clicável com easter egg (5 cliques redirecionam para vendas)
Botões de Ação:
"Nova Conta" - Redireciona para cadastro
"Acessar Conta" - Redireciona para login


Elementos Visuais:
Ícone de olho animado
Quadrados flutuantes coloridos (cores do Google)
Efeitos de glass morphism


Botão de Suporte Flutuante: 
Botão verde com ícone do WhatsApp
Número de suporte carregado da tabela "geral" campo "suporte"
Posicionamento fixo na tela (canto inferior direito)
Efeito hover com texto "Suporte"
Link direto para WhatsApp


PWA Ready: Suporte a Progressive Web App
Cookie Consent: Banner de aceitação de cookies
SEO Otimizado: Meta tags para redes sociais


🔐 Sistema de Autenticação
Funcionalidades:
Interface de Login/Cadastro:

Sistema de Abas: Alternância entre login e cadastro
Design Responsivo: Interface adaptável para mobile
Validações em Tempo Real: Feedback visual para campos
Loading States: Indicadores de carregamento
Toast Notifications: Mensagens de sucesso e erro

Login:

Autenticação por WhatsApp: Sistema de código via WhatsApp
Campo de Telefone: Com máscara automática
Código de Verificação: 6 dígitos enviados via WhatsApp
Validação de Usuário: Verificação de existência e status
Redirecionamento Inteligente: Baseado no tipo de usuário
Bypass Administrativo: Código especial para administradores

Cadastro:

Seleção de Perfil: 3 tipos disponíveis (Gestor, Nutricionista, Profissional)
Verificação WhatsApp: Código de confirmação via WhatsApp
Dados Pessoais:
Foto de perfil (upload opcional)
Nome e sobrenome
Seleção de cidade e escola
Sexo (Masculino/Feminino/Outro)


Validações:
Campos obrigatórios
Verificação de usuário existente
Validação de formato de imagem


Upload de Foto: Integração com Supabase .
Notificação Administrativa: Mensagem automática para admin

Sistema de Verificação:

Códigos de 6 Dígitos: Gerados aleatoriamente
Expiração: 15 minutos para códigos de cadastro
Interface de Digitação: 6 campos individuais
Navegação por Teclado: Setas e backspace
Colar Código: Suporte a colagem completa

Integração com APIs:

Supabase: Cliente configurado via Lambda
WhatsApp API: Envio de mensagens automático
.: Upload de fotos de perfil
Configurações: Carregamento via Lambda


⏳ Página de Aprovação
Funcionalidades:

Tela de Aguardando: Interface informativa para usuários pendentes
Design Consistente: Mesmo estilo visual do sistema
Ícone Animado: Ampulheta com animação pulse
Mensagem Clara: Explicação do status de aprovação
Botão de Retorno: Link para voltar ao login
Responsividade: Adaptável para mobile e desktop


🔧 Funcionalidades Técnicas
Sistema de Configuração:

Lambda AWS: Carregamento de configurações sensíveis
Cliente Supabase: Configuração automática
APIs WhatsApp: Credenciais seguras
Fallback: Tratamento de erros de carregamento

Sistema de Sessão:

local.: Armazenamento persistente
session.: Dados temporários
Hash de Sessão: Geração segura de tokens
Expiração: Controle de validade de sessão

Sistema de Redirecionamento:

Verificação de Sessão: Controle automático de login
Redirecionamento por Tipo: Baseado no perfil do usuário
URLs Dinâmicas: Parâmetros de tipo de acesso
Fallback: Redirecionamento padrão

Integração com Banco:

Tabela usuarios: Dados principais dos usuários
Tabela cidades: Lista de cidades disponíveis
Tabela escolas: Escolas por cidade
Tabela geral: Configurações do sistema (incluindo suporte)


📱 Interface e UX
Design System:

Tailwind CSS: Framework de estilização
Inter Font: Tipografia moderna
Phosphor Icons: Ícones consistentes
Cores Primárias: Azul (#005ae2) como cor principal

Responsividade:

Mobile-First: Design otimizado para mobile
Breakpoints: Adaptação para diferentes telas
Touch-Friendly: Botões e controles adequados
PWA: Suporte a instalação como app

Animações:

CSS Animations: Efeitos suaves
Loading States: Indicadores visuais
Transições: Mudanças de estado fluidas
Floating Elements: Elementos flutuantes animados


🔒 Segurança e Validação
Autenticação:

Hash Seguro: Geração de tokens criptográficos
Validação de Códigos: Verificação de códigos temporários
Controle de Sessão: Gerenciamento seguro de login
Logout Completo: Limpeza de todos os dados

Validações:

Campos Obrigatórios: Verificação de preenchimento
Formato de Telefone: Máscara e validação
Códigos de Verificação: Validação de 6 dígitos
Upload de Imagens: Verificação de formato e tamanho

Proteção de Dados:

Configurações Seguras: Carregamento via Lambda
APIs Protegidas: Credenciais não expostas
Dados Sensíveis: Armazenamento seguro
Cookie Consent: Conformidade com LGPD


📊 Resumo das Funcionalidades



Funcionalidade
Descrição
Status



Landing Page
Página inicial com design moderno
✅ Completo


Login
Autenticação por WhatsApp
✅ Completo


Cadastro
Registro de novos usuários
✅ Completo


Verificação
Sistema de códigos
✅ Completo


Aprovação
Tela de aguardando aprovação
✅ Completo


Suporte
Botão flutuante com WhatsApp
✅ Completo


Redirecionamento
Navegação inteligente
✅ Completo


PWA
Suporte a Progressive Web App
✅ Completo



🎯 Objetivo do Sistema
O Sistema Geral serve como ponto de entrada e controle central do OlharMais, fornecendo uma experiência de usuário fluida e segura para autenticação, cadastro e navegação inicial, com suporte completo a diferentes tipos de usuários e integração com todas as funcionalidades do sistema.

🔄 Fluxo de Usuário

Acesso: Usuário acessa a página inicial
Escolha: Decide entre nova conta ou login
Autenticação: Processo de verificação via WhatsApp
Validação: Verificação de dados e permissões
Redirecionamento: Navegação para perfil específico
Suporte: Acesso direto ao suporte via WhatsApp


📋 Requisitos Técnicos
Dependências:

Supabase (banco de dados)
Tailwind CSS (estilização)
Phosphor Icons (ícones)
WhatsApp API (mensagens)

APIs Integradas:

Supabase Client
Supabase .
WhatsApp Business API
AWS Lambda (configurações)

Compatibilidade:

Navegadores modernos
Dispositivos móveis
PWA (Progressive Web App)
iOS e Android


🆘 Sistema de Suporte
Botão Flutuante:

Posicionamento: Fixo na tela
Cor: Verde (#22c55e)
Ícone: WhatsApp
Funcionalidade: Abre WhatsApp direto

Integração:

Fonte de Dados: Tabela "geral" campo "suporte"
Formato: Número com código 55
Abertura: Link direto para WhatsApp
Responsividade: Adaptável para mobile




Perfil Gestor
📋 Visão Geral
O perfil Gestor é destinado a Prefeitos e Secretários que gerenciam o sistema educacional de uma cidade. Possui acesso completo aos dados das escolas, alunos e funcionalidades administrativas.

🏠 Home (Dashboard Principal)
Funcionalidades:

Dashboard Resumido: Visualização de métricas gerais da cidade
Cards de Métricas:
Total de escolas
Total de turmas  
Total de alunos
Percentual de presença do dia


Stories/Notificações: Visualização de stories em formato de círculos
Navegação Principal: Acesso a todas as seções do sistema
Menu Lateral: Navegação entre funcionalidades
Responsividade: Interface adaptável para mobile e desktop


📹 Câmeras
Funcionalidades:

Visualização de Câmeras: Acesso às câmeras de todas as escolas
Seleção de Escola: Dropdown para escolher escola específica
Seleção de Câmera: Dropdown para escolher câmera específica
Streaming de Vídeo: Visualização em tempo real das câmeras
Controles de Câmera:
Botão de captura de foto
Botão de gravação de vídeo
Controles de zoom e movimento


Status de Câmera: Indicador de status (online/offline)
Layout Responsivo: Interface adaptável para diferentes telas


📊 Frequência
Funcionalidades:

Visualização de Frequência: Acompanhamento da presença dos alunos
Filtros de Busca:
Por escola
Por turma
Por data


Tabela de Frequência: Lista detalhada de presenças
Estatísticas: Percentual de presença por turma/escola
Exportação: Possibilidade de exportar dados
Interface Responsiva: Adaptável para mobile


📈 Métricas
Funcionalidades:

Dashboard de Métricas: Visualização de indicadores educacionais
Gráficos e Estatísticas:
Frequência escolar
Desempenho acadêmico
Indicadores por escola


Filtros Temporais: Seleção de período para análise
Comparativos: Comparação entre escolas/regiões
Relatórios Visuais: Gráficos interativos
Exportação de Dados: Download de relatórios


📋 Relatórios
Funcionalidades:

Geração de Relatórios: Criação de relatórios personalizados
Tipos de Relatório:
Relatório de frequência
Relatório de desempenho
Relatório financeiro


Filtros Avançados: Múltiplos critérios de filtragem
Exportação: Download em diferentes formatos (PDF, Excel)
Agendamento: Programação de relatórios automáticos
Histórico: Acesso a relatórios anteriores


🔔 Notificações
Funcionalidades:

Lista de Notificações: Visualização de todas as notificações
Filtros:
Por tipo de notificação
Por escola
Por data


Status de Leitura: Marcação de notificações lidas/não lidas
Ações:
Marcar como lida
Excluir notificação
Responder notificação


Notificações em Tempo Real: Atualização automática


✏️ Criar Notificação
Funcionalidades:

Formulário de Criação: Interface para criar novas notificações
Campos do Formulário:
Título da notificação
Conteúdo/mensagem
Destinatários (escolas, turmas, alunos)
Tipo de notificação
Data de envio


Anexos: Possibilidade de anexar arquivos
Preview: Visualização prévia da notificação
Agendamento: Programação para envio futuro
Rascunhos: Salvamento de notificações incompletas


👤 Perfil
Funcionalidades:

Dados Pessoais: Visualização e edição de informações pessoais
Foto de Perfil: Upload e gerenciamento de foto
Alteração de Senha: Formulário para troca de senha
Configurações de Conta: Preferências do usuário
Histórico de Atividades: Log de ações realizadas
Configurações de Notificação: Preferências de alertas
Logout: Encerramento de sessão


👨‍🎓 Ficha do Aluno
Funcionalidades:

Visualização de Ficha: Acesso completo aos dados do aluno
Informações Pessoais: Dados básicos do aluno
Dados Acadêmicos: Histórico escolar e notas
Frequência: Registro de presenças e faltas
Dados Familiares: Informações dos responsáveis
Observações: Anotações sobre o aluno
Fotos: Galeria de fotos do aluno
Edição: Possibilidade de editar informações (se autorizado)


🎮 Botões e Interações
Funcionalidades:

Navegação: Controles de navegação entre páginas
Interações de Interface: Manipulação de elementos da UI
Validações: Verificações de formulários
Animações: Efeitos visuais e transições
Responsividade: Adaptação para diferentes dispositivos
Integração: Conexão com outras funcionalidades


🔧 Funcionalidades Gerais
Segurança:

Autenticação: Sistema de login seguro
Autorização: Controle de acesso por perfil
Sessão: Gerenciamento de sessão do usuário

Interface:

Design Responsivo: Adaptação para mobile e desktop
Navegação Intuitiva: Menu lateral e breadcrumbs
Feedback Visual: Indicadores de carregamento e status
Acessibilidade: Recursos para usuários com necessidades especiais

Integração:

Banco de Dados: Conexão com Supabase
APIs: Integração com serviços externos
Sincronização: Sincronização de dados em tempo real
Backup: Sistema de backup automático


📱 Compatibilidade

Desktop: Interface otimizada para computadores
Tablet: Adaptação para tablets
Mobile: Interface responsiva para smartphones
Navegadores: Compatibilidade com principais navegadores


🔄 Atualizações

Tempo Real: Dados atualizados automaticamente
Notificações Push: Alertas em tempo real
Sincronização: Dados sincronizados entre dispositivos
Cache: Sistema de cache para melhor performance


Perfil Nutricionista
📋 Visão Geral
O perfil Nutricionista é destinado a profissionais de nutrição que trabalham no sistema educacional. Possui acesso aos dados das escolas e alunos para acompanhamento nutricional e frequência escolar.

🏠 Home (Dashboard Principal)
Funcionalidades:

Dashboard Resumido: Visualização de métricas gerais das escolas
Cards de Métricas:
Total de escolas
Total de turmas  
Total de alunos
Percentual de presença do dia


Stories/Notificações: Visualização de stories em formato de círculos
Ações Rápidas:
Link direto para verificar frequência


Resumo por Escola: Cards individuais com dados de cada escola
Navegação Principal: Acesso a todas as seções do sistema
Menu Lateral: Navegação entre funcionalidades
Responsividade: Interface adaptável para mobile e desktop


🔔 Notificações
Funcionalidades:

Lista de Notificações: Visualização de todas as notificações
Abas:
Recebidos
Enviados (se autorizado)


Filtros:
Por tipo de notificação (informativo, importante, urgente)
Por escola
Por data


Status de Leitura: Marcação de notificações lidas/não lidas
Ações:
Marcar como lida
Excluir notificação (apenas próprias)
Responder notificação


Criar Notificações:
Formulário de criação
Seleção de destinatários
Tipos de envio (todos de uma profissão, usuários específicos)
Níveis de importância


Visualizações: Controle de quem leu as notificações enviadas
Notificações em Tempo Real: Atualização automática


📊 Frequência
Funcionalidades:

Seleção de Escola: Dropdown para escolher escola específica
Calendário de Dias: Visualização de dias com registros de frequência
Filtros:
Mostrar/ocultar fins de semana
Filtro por data


Métricas Detalhadas:
Alunos presentes
Alunos ausentes
Total de alunos
Percentual de presença


Gráfico Circular: Visualização da porcentagem de presença
Navegação por Etapas:
Etapa 1: Seleção de escola
Etapa 2: Seleção de data
Etapa 3: Visualização de métricas


Interface Responsiva: Adaptável para mobile e desktop


👤 Perfil
Funcionalidades:

Dados Pessoais: Visualização e edição de informações pessoais
Foto de Perfil: Upload e gerenciamento de foto
Alteração de WhatsApp: Sistema de verificação em duas etapas
Verificação do número atual
Inserção do novo número
Verificação do novo número


Campos Editáveis:
Nome completo
Número de WhatsApp


Validações:
Verificação de número já cadastrado
Validação de formato de WhatsApp


Upload de Foto:
Suporte a diferentes formatos de imagem
Limite de tamanho (5MB)
Preview em tempo real


Configurações de Conta: Preferências do usuário
Logout: Encerramento de sessão


👨‍🎓 Ficha do Aluno
Funcionalidades:

Visualização de Ficha: Acesso completo aos dados do aluno
Informações Pessoais: Dados básicos do aluno
Dados Acadêmicos: 
Registro do aluno
Escola
Cidade
Série
Turma
Período


Dados Familiares: Informações dos responsáveis
Contato 1 (WhatsApp)
Contato 2 (WhatsApp)


Registros de Frequência: 
Tabela detalhada de presenças
Filtro por mês
Horários de entrada e saída
Dias da semana


Fotos: Foto do aluno
Impressão: Funcionalidade de impressão da ficha
Navegação: Botão voltar para página anterior


🎮 Botões e Interações
Funcionalidades:

Navegação: Controles de navegação entre páginas
Barra de Navegação Mobile: 
Início
Frequência
Perfil
Sair


Interações de Interface: Manipulação de elementos da UI
Validações: Verificações de formulários
Animações: Efeitos visuais e transições
Responsividade: Adaptação para diferentes dispositivos
Integração: Conexão com outras funcionalidades
Logout: Função de limpeza de sessão


🧭 Navegação
Funcionalidades:

Menu Mobile: Barra de navegação fixa na parte inferior
Itens de Menu:
Início (home_nutri.html)
Frequência (frequencia_nutri.html)
Perfil (perfil_nutri.html)
Sair (logout)


Indicador Ativo: Marcação da página atual
Design Responsivo: Ocultação em telas maiores
Compatibilidade PWA: Suporte a safe-area-inset


🔧 Funcionalidades Gerais
Segurança:

Autenticação: Sistema de login seguro
Autorização: Controle de acesso por perfil (NUTRICIONISTA)
Sessão: Gerenciamento de sessão do usuário
Verificação de WhatsApp: Sistema de códigos de verificação

Interface:

Design Responsivo: Adaptação para mobile e desktop
Navegação Intuitiva: Menu lateral e breadcrumbs
Feedback Visual: Indicadores de carregamento e status
Acessibilidade: Recursos para usuários com necessidades especiais
PWA: Suporte a Progressive Web App

Integração:

Banco de Dados: Conexão com Supabase
APIs: Integração com serviços externos
WhatsApp API: Envio de códigos de verificação
.: Upload de fotos de perfil
Sincronização: Sincronização de dados em tempo real

Permissões:

Acesso por Cidade: Nutricionistas podem ter acesso a todas as escolas de uma cidade
Acesso por Escola: Acesso específico a escolas determinadas
Acesso por Turma: Acesso apenas às turmas permitidas
Hierarquia: Sistema de permissões baseado em hierarquia profissional


📱 Compatibilidade

Desktop: Interface otimizada para computadores
Tablet: Adaptação para tablets
Mobile: Interface responsiva para smartphones
Navegadores: Compatibilidade com principais navegadores
PWA: Funcionalidade offline e instalação como app


🔄 Atualizações

Tempo Real: Dados atualizados automaticamente
Notificações Push: Alertas em tempo real
Sincronização: Dados sincronizados entre dispositivos
Cache: Sistema de cache para melhor performance
Stories: Sistema de stories com vídeos das cidades


📊 Relatórios e Métricas

Dashboard de Frequência: Métricas detalhadas de presença
Gráficos Visuais: Representação gráfica de dados
Filtros Temporais: Seleção de períodos específicos
Exportação: Funcionalidade de impressão de relatórios
Histórico: Acesso a dados históricos de frequência


🔔 Sistema de Notificações

Recebimento: Visualização de notificações recebidas
Envio: Criação e envio de notificações (se autorizado)
Tipos: Informativo, Importante, Urgente
Destinatários: Seleção específica de usuários ou profissões
Rastreamento: Controle de visualizações das notificações enviadas


Perfil Profissional
📋 Visão Geral
O perfil Profissional é destinado a profissionais da educação (professores, coordenadores, diretores) que trabalham diretamente com as escolas e turmas. Possui acesso específico às turmas/escolas permitidas e funcionalidades especializadas para acompanhamento educacional.

🏠 Home (Dashboard Principal)
Funcionalidades:

Dashboard Resumido: Visualização de métricas das turmas/escolas permitidas
Cards de Métricas:
Total de escolas
Total de turmas  
Total de alunos
Percentual de presença do dia


Stories/Notificações: Visualização de stories em formato de círculos
Resumo por Escola: Cards individuais com dados de cada escola permitida
Navegação Principal: Acesso a todas as seções do sistema
Menu Lateral: Navegação entre funcionalidades
Responsividade: Interface adaptável para mobile e desktop


📹 Câmeras
Funcionalidades:

Visualização de Câmeras: Acesso às câmeras das escolas permitidas
Filtros por Escola: Seleção específica de escolas
Filtros por Turma: Seleção específica de turmas
Layout Responsivo: Grid adaptável para diferentes tamanhos de tela
Controles de Câmera: Play, pause, fullscreen
Status de Câmera: Indicadores de online/offline
Navegação Intuitiva: Interface amigável para visualização


📊 Frequência
Funcionalidades:

Consulta de Frequência: Busca por nome do aluno
Filtros Avançados:
Por escola
Por turma
Por período (data)


Visualização de Dados:
Lista de alunos com frequência
Status de presença (presente/ausente)
Histórico de registros


Ações por Aluno:
Visualizar ficha completa
Ver histórico detalhado


Exportação: Funcionalidade para exportar dados
Interface Responsiva: Adaptável para mobile


🔔 Notificações
Funcionalidades:

Lista de Notificações: Visualização de todas as notificações recebidas
Filtros:
Por tipo de notificação
Por data
Por status (lida/não lida)


Detalhes da Notificação: Visualização completa do conteúdo
Marcar como Lida: Funcionalidade para marcar notificações
Exclusão: Remover notificações antigas
Navegação: Links para páginas relacionadas


👤 Perfil
Funcionalidades:

Dados Pessoais:
Nome completo (editável)
WhatsApp (editável com verificação)


Foto de Perfil:
Upload de nova foto
Visualização atual
Suporte a formatos de imagem


Verificação de WhatsApp:
Sistema de códigos de verificação
Alteração segura de número
Validação em duas etapas


Salvamento de Dados: Atualização automática no banco
Interface Responsiva: Adaptável para mobile


📋 Ficha do Aluno
Funcionalidades:

Informações Completas do Aluno:
Dados pessoais
Informações da escola
Dados da turma
Contatos dos responsáveis


Foto do Aluno: Visualização da foto de perfil
Registros de Frequência:
Histórico completo de presenças
Filtro por mês
Horários de entrada e saída


Funcionalidade de Impressão: Botão para imprimir ficha
Navegação: Botão para voltar à página anterior
Interface Responsiva: Adaptável para diferentes dispositivos


📈 Dashboard Avançado
Funcionalidades:

Dashboard em Tempo Real: Interface moderna com métricas live
Métricas Principais:
Total de alunos
Presentes hoje
Frequência média
Turmas ativas
Alertas ativos


3 Views Rotativas:
View 1: Visão Geral
Gráfico de frequência por turma
Top 10 melhores alunos
Atividade recente


View 2: Análise Detalhada
Tendências dos últimos 7 dias
Distribuição por horário


View 3: Alunos Críticos
Alunos com baixa frequência
Comparativo de performance




Rotação Automática: Mudança automática de views a cada 15 segundos
Controles Manuais: Botões para alternar views
Relógio em Tempo Real: Exibição da hora atual
Indicadores de Status: Status de conexão e permissões


🤖 Assistente IA
Funcionalidades:

Chat com IA: Interface de conversação com assistente
Consultas de Frequência: Perguntas sobre dados de frequência
Análises Inteligentes: 
Estatísticas de presença
Identificação de padrões
Relatórios automáticos


Contexto Personalizado: Acesso apenas às turmas permitidas
Histórico de Conversas: Manutenção do histórico de interações
Formatação Markdown: Respostas bem formatadas
Interface Responsiva: Chat adaptável para mobile
Indicadores de Carregamento: Feedback visual durante processamento


🔧 Funcionalidades Gerais
Sistema de Navegação
Barra de Navegação Mobile: Navegação fixa na parte inferior
Menu Responsivo: Adaptação para diferentes tamanhos de tela
Navegação por Ícones: Interface intuitiva com ícones
Logout Seguro: Função para sair do sistema
Compatibilidade PWA: Suporte para modo standalone

Sistema de Autenticação

Verificação de Login: Controle de acesso às páginas
Validação de Perfil: Verificação se é PROFISSIONAL
Redirecionamento: Encaminhamento para login se necessário
Persistência de Sessão: Manutenção do login

Sistema de Permissões

Controle de Acesso: Baseado em permissões de escola/turma
Filtros Automáticos: Dados filtrados por permissões
Níveis de Acesso:
Acesso por escola
Acesso por turma específica


Validação de Dados: Apenas dados permitidos são exibidos

Sistema de Notificações (Toast)

Feedback Visual: Mensagens de sucesso, erro, aviso
Posicionamento: Canto superior direito
Auto-dismiss: Desaparecimento automático
Tipos de Mensagem: Success, error, warning, info


📱 Compatibilidade e Responsividade
Mobile-First Design

Interface Adaptável: Otimizada para dispositivos móveis
Touch-Friendly: Elementos adequados para toque
Navegação Mobile: Barra de navegação específica para mobile
PWA Support: Suporte para Progressive Web App

Desktop Optimization

Layout Desktop: Interface otimizada para telas maiores
Navegação Desktop: Menu lateral para desktop
Responsividade: Adaptação automática entre dispositivos


🔒 Segurança e Privacidade
Controle de Acesso

Validação de Sessão: Verificação constante de login
Permissões Granulares: Acesso específico por escola/turma
Proteção de Dados: Apenas dados autorizados são exibidos

Validação de Dados

Verificação de Entrada: Validação de formulários
Sanitização: Limpeza de dados de entrada
Prevenção de XSS: Proteção contra ataques


🚀 Performance e UX
Carregamento Otimizado

Lazy Loading: Carregamento sob demanda
Caching: Armazenamento local de dados
Compressão: Otimização de recursos

Experiência do Usuário

Feedback Visual: Indicadores de carregamento
Navegação Intuitiva: Interface fácil de usar
Acessibilidade: Suporte para diferentes necessidades
Consistência: Design uniforme em todas as páginas


📊 Integração com Banco de Dados
Supabase Integration

Cliente Supabase: Conexão com banco de dados
Queries Otimizadas: Consultas eficientes
Real-time Updates: Atualizações em tempo real
Error Handling: Tratamento de erros de conexão

Views e Tabelas Utilizadas

view_alunos_logs: Logs de frequência dos alunos
view_alunos_criticos: Alunos com baixa frequência
dias_com_logs: Estatísticas diárias de presença
permissoes_escola: Permissões por escola
permissoes_turma: Permissões por turma


🔄 Atualizações e Manutenção
Sistema de Configuração

Lambda Integration: Configurações via AWS Lambda
Dynamic Loading: Carregamento dinâmico de configurações
Fallback System: Sistema de backup para configurações

Monitoramento

Error Logging: Registro de erros
Performance Monitoring: Monitoramento de performance
User Analytics: Análise de uso (se implementado)


📋 Resumo das Principais Diferenças do Profissional

Acesso Limitado: Apenas às escolas/turmas permitidas
Foco Educacional: Interface específica para profissionais da educação
Dashboard Avançado: Sistema de métricas em tempo real
Assistente IA: Chat inteligente para consultas
Ficha Completa: Visualização detalhada de alunos
Sistema de Câmeras: Acesso às câmeras das escolas
Notificações: Sistema de notificações personalizado
Perfil Completo: Gerenciamento de dados pessoais
Navegação Mobile: Interface otimizada para mobile
Segurança: Controle rigoroso de permissões

O perfil Profissional oferece uma experiência completa e especializada para profissionais da educação, com foco em acompanhamento de frequência, análise de dados e comunicação eficiente.

Perfil Estagiário
📋 Visão Geral
O perfil Estagiário é destinado a estagiários que trabalham nas escolas para cadastrar e gerenciar alunos. Possui acesso limitado apenas à escola onde está lotado, com foco no cadastro, edição e gestão de alunos.

🔐 Autenticação
Funcionalidades:

Login por Código de Acesso: Sistema de autenticação via código único
Validação de Acesso:
Verificação de código de acesso válido
Controle de período de acesso (data início e data limite)
Verificação de status ativo do estagiário


Sistema de Sessão:
Armazenamento seguro de dados na session.
Redirecionamento automático se já logado
Limpeza de sessão no logout


Interface de Login:
Design responsivo e moderno
Feedback visual de erros
Loading states durante autenticação


Validações:
Código obrigatório
Verificação de período de acesso
Tratamento de erros de autenticação




👥 Gestão de Alunos
Funcionalidades:
Dashboard Principal:

Header Fixo: Nome da escola e controles principais
Contadores: Total de alunos e alunos exibidos
Grid de Alunos: Visualização em cards dos alunos da escola
Painel de Filtros: Sistema de filtros avançados

Sistema de Filtros:

Filtro por Turma: Seleção de turmas específicas
Busca por Nome: Pesquisa textual de alunos
Filtro de Fotos: Mostrar apenas alunos sem foto
Painel Deslizante: Interface responsiva para filtros

Cadastro de Alunos:

Modal de Cadastro: Interface completa para novo aluno
Informações Escolares:
Seleção de turma (agrupadas por série)
Registro do aluno (RA)
Associação automática com série


Dados Pessoais:
Nome completo
Data de nascimento (com máscara e validação)
Sexo (Masculino/Feminino)


Foto do Aluno:
Upload de imagem
Preview em tempo real
Validação de formato


Validações:
Campos obrigatórios
Validação de data de nascimento
Verificação de formato de imagem



Edição de Alunos:

Modal de Edição: Interface para alterar dados
Campos Editáveis:
Informações escolares
Dados pessoais
Turma e série


Validações: Mesmas validações do cadastro
Sincronização: Marcação para atualização no dispositivo

Exclusão de Alunos:

Modal de Confirmação: Confirmação antes da exclusão
Exclusão Completa:
Remoção de registros relacionados
Exclusão de foto do .
Limpeza de dados em aluno_dispositivo


Segurança: Confirmação obrigatória

Gestão de Fotos:

Alteração de Foto: Botão direto no card do aluno
Upload Automático: Integração com Supabase .
Sincronização: Atualização automática nos dispositivos
Validação: Verificação de fotos padrão

Interface Responsiva:

Grid Adaptativo: 2-5 colunas conforme tamanho da tela
Cards de Aluno:
Foto do aluno (ou placeholder)
Nome completo
Série e turma
Botões de ação (editar, excluir, alterar foto)


Estados Vazios: Mensagem quando não há alunos


🔧 Funcionalidades Técnicas
Sistema de Autenticação:

Verificação de Login: Controle de sessão
Validação de Prazo: Verificação de data limite
Redirecionamento: Controle de acesso às páginas
Logout: Limpeza completa de sessão

Integração com Banco de Dados:

Supabase: Cliente configurado via Lambda
Tabelas Principais:
estagiarios: Dados do estagiário
alunos: Cadastro de alunos
escolas: Informações da escola
turmas: Turmas disponíveis
series: Séries escolares
aluno_dispositivo: Vinculação com dispositivos
dispositivos: Dispositivos da escola



Sistema de .:

Bucket de Fotos: Armazenamento de imagens dos alunos
Upload Automático: Integração com Supabase .
URLs Públicas: Geração automática de links
Exclusão: Limpeza de arquivos ao excluir aluno

Sincronização com Dispositivos:

Vinculação Automática: Criação de registros em aluno_dispositivo
Flag de Atualização: Marcação mudar_no_dispositivo
Dispositivos Ativos: Apenas dispositivos com status ATIVO
Telefone do Estagiário: Registro de quem cadastrou


📱 Interface e UX
Design Responsivo:

Mobile-First: Interface otimizada para dispositivos móveis
Grid Adaptativo: Ajuste automático de colunas
Touch-Friendly: Botões e controles adequados para toque

Feedback Visual:

Loading States: Indicadores de carregamento
Toast Notifications: Mensagens de sucesso e erro
Validações Visuais: Feedback em tempo real
Estados Vazios: Mensagens quando não há dados

Navegação:

Header Fixo: Controles sempre acessíveis
Painel de Filtros: Deslizante e responsivo
Modais: Interfaces focadas para ações específicas


🔒 Segurança e Controle de Acesso
Autenticação:

Código Único: Sistema de códigos de acesso
Período Limitado: Controle de data início e fim
Status Ativo: Verificação de estagiário ativo
Sessão Segura: Armazenamento em session.

Controle de Dados:

Escola Específica: Acesso apenas à escola lotado
Filtros Automáticos: Dados filtrados por escola
Validações: Verificações de integridade
Exclusão Segura: Confirmação obrigatória

Integridade de Dados:

Relacionamentos: Manutenção de integridade referencial
Soft Delete: Exclusão lógica quando aplicável
Auditoria: Registro de quem cadastrou cada aluno
Sincronização: Controle de atualizações nos dispositivos


📊 Resumo das Funcionalidades



Funcionalidade
Descrição
Acesso



Autenticação
Login por código de acesso
✅ Completo


Dashboard
Visão geral dos alunos
✅ Completo


Cadastro
Criação de novos alunos
✅ Completo


Edição
Modificação de dados
✅ Completo


Exclusão
Remoção de alunos
✅ Completo


Fotos
Gestão de imagens
✅ Completo


Filtros
Busca e filtros avançados
✅ Completo


Sincronização
Atualização em dispositivos
✅ Completo



🎯 Objetivo do Perfil
O perfil Estagiário foi projetado para permitir que estagiários das escolas cadastrem e gerenciem alunos de forma eficiente e segura, com acesso limitado apenas à escola onde estão lotados e funcionalidades focadas na gestão completa do cadastro de alunos, incluindo fotos e sincronização com dispositivos de reconhecimento facial.

🔄 Fluxo de Trabalho

Login: Estagiário acessa com código único
Dashboard: Visualiza todos os alunos da escola
Filtros: Aplica filtros para encontrar alunos específicos
Cadastro: Adiciona novos alunos com foto
Edição: Modifica dados existentes
Exclusão: Remove alunos quando necessário
Sincronização: Dados são automaticamente sincronizados com dispositivos


📋 Requisitos Técnicos
Dependências:

Supabase (banco de dados)
Tailwind CSS (estilização)
Phosphor Icons (ícones)
Toastify (notificações)

APIs Integradas:

Supabase Client
Supabase .
Lambda para configurações

Compatibilidade:

Navegadores modernos
Dispositivos móveis
PWA (Progressive Web App)


Perfil Responsável
📋 Visão Geral
O perfil Responsável é destinado a pais, mães, avós, tios e outros responsáveis legais pelos alunos. Possui acesso limitado apenas aos dados dos alunos sob sua responsabilidade, com foco no acompanhamento da frequência escolar e comunicação com a escola.

🏠 Home (Dashboard Principal)
Funcionalidades:

Dashboard Resumido: Visualização de métricas dos alunos sob responsabilidade
Cards de Métricas:
Total de escolas dos filhos
Total de turmas dos filhos
Total de alunos sob responsabilidade
Percentual de presença do dia


Stories/Notificações: Visualização de stories em formato de círculos com vídeos das cidades
Lista de Alunos: Cards individuais para cada aluno sob responsabilidade
Resumo de Frequência Mensal: Para cada aluno:
Percentual de presença do mês atual
Dias presentes vs ausentes
Último registro de entrada/saída


Ações Rápidas:
Link direto para verificar frequência de cada aluno
Link para ficha completa de cada aluno
Acesso ao relatório do responsável


Sistema de Permissões: Acesso apenas aos alunos vinculados via tabela permissoes_aluno
Responsividade: Interface adaptável para mobile e desktop


📹 Câmeras
Funcionalidades:

Visualização de Câmeras: Acesso às câmeras das escolas dos filhos
Tipos de Visualização:
Câmeras da Cidade: Câmeras SITE da cidade do responsável
Câmeras das Escolas: Câmeras ESCOLA das escolas dos filhos
Veículos Escolares: Monitoramento de veículos em tempo real


Filtros:
Filtro por escola específica dos filhos
Seleção de tipo de visualização


Sistema de Veículos:
Mapa em tempo real com localização dos veículos
Lista de veículos com status (ligado/desligado)
Velocidade em tempo real
Câmeras dos veículos (quando disponível)
Atualização automática a cada 30 segundos


Controles de Mapa:
Centralizar mapa nos veículos
Atualizar dados dos veículos


Responsividade: Interface otimizada para mobile


📊 Frequência
Funcionalidades:

Seleção de Aluno: Dropdown com todos os alunos sob responsabilidade
Informações do Aluno:
Foto do aluno
Nome completo
Escola e turma


Registros de Frequência:
Agrupamento por data
Horário de entrada (primeiro registro do dia)
Horário de saída (último registro do dia)
Formatação de data e hora em português


Estado Vazio: Mensagem quando não há registros
Navegação: Links diretos para cada aluno via URL
Responsividade: Interface adaptável para mobile


📢 Notificações/Comunicados
Funcionalidades:

Recebimento de Comunicados: Apenas recebe comunicados (não cria)
Filtros por Importância:
🟢 Informativos
🟡 Importantes  
🔴 Urgentes
Todos


Sistema de Leitura:
Indicador visual de comunicados não lidos
Marcar como lido
Contador de visualizações


Filtro por Turma: Recebe apenas comunicados das turmas dos filhos
Detalhes do Comunicado:
Título e conteúdo
Autor e data
Nível de importância
Lista de visualizações


Responsividade: Interface otimizada para mobile


👤 Perfil
Funcionalidades:

Dados Pessoais:
Nome completo (editável)
WhatsApp (com verificação)


Foto de Perfil:
Upload de nova foto
Preview em tempo real
Validação de formato e tamanho


Sistema de Verificação WhatsApp:
Verificação do número atual
Alteração para novo número
Códigos de verificação via WhatsApp
Validação de duplicidade


Validações:
Verificação de números já cadastrados
Máscara automática de telefone
Validação de formato de imagem


Responsividade: Interface adaptável para mobile


📋 Ficha do Aluno
Funcionalidades:

Informações Completas do Aluno:
Foto do aluno
Nome completo
Registro do aluno
Escola, cidade, série, turma e período
Contatos dos responsáveis


Registros de Frequência:
Filtro por mês
Tabela com entrada e saída por dia
Formatação de data e hora
Agrupamento por data


Funcionalidades de Impressão:
Botão de impressão
Estilos otimizados para impressão
Quebra de página adequada


Navegação: Acesso via URL com ID do aluno
Responsividade: Interface adaptável para mobile


📄 Relatório do Responsável
Funcionalidades:

Seleção de Parâmetros:
Dropdown com alunos sob responsabilidade
Seleção de período (data início e fim)


Relatório Completo:
Cabeçalho com informações da escola
Dados do aluno selecionado
Tabela de registros de entrada/saída
Resumo estatístico do período


Estatísticas:
Total de dias com presença
Total de entradas
Total de saídas


Funcionalidades de Impressão:
Layout otimizado para impressão
Estilos profissionais
Quebra de página adequada


Metodologia: Entrada = primeiro registro do dia, Saída = último registro
Responsividade: Interface adaptável para mobile


🧭 Navegação
Funcionalidades:

Barra de Navegação Mobile:
Início (Home)
Frequência
Perfil
Sair


Sistema Duplo:
Iframe com navbar (fallback)
JavaScript alternativo (principal)


Indicador Ativo: Marcação visual da página atual
Responsividade: Ocultar em desktop, mostrar em mobile
Logout: Limpeza de sessão e redirecionamento


🔧 Funcionalidades Gerais
Sistema de Autenticação:

Verificação de tipo de usuário (RESPONSÁVEL)
Redirecionamento automático se não autorizado
Sessão persistente via local.

Sistema de Permissões:

Acesso apenas aos alunos vinculados via permissoes_aluno
Filtro automático de dados por responsabilidade
Segurança por nível de acesso

Integração com APIs:

Supabase para dados
API Fulltrack para veículos
API WhatsApp para verificação

Responsividade:

Design mobile-first
Adaptação para diferentes tamanhos de tela
Suporte a PWA (Progressive Web App)

Sistema de Notificações:

Toast notifications
Feedback visual para ações
Mensagens de erro e sucesso

Compatibilidade:

Navegadores modernos
Suporte a iOS e Android
Modo standalone (PWA)


📱 Características Específicas do Responsável
Acesso Limitado:

Apenas aos alunos sob sua responsabilidade
Não pode criar comunicados
Não tem acesso administrativo

Foco na Frequência:

Acompanhamento detalhado da presença
Relatórios personalizados
Histórico completo de entrada/saída

Comunicação Unidirecional:

Recebe comunicados da escola
Não pode enviar comunicados
Filtro por turma dos filhos

Monitoramento Visual:

Câmeras das escolas dos filhos
Veículos escolares em tempo real
Stories com conteúdo da cidade

Gestão de Perfil:

Dados pessoais editáveis
Verificação de WhatsApp
Upload de foto de perfil


🔒 Segurança e Privacidade
Controle de Acesso:

Verificação de tipo de usuário
Filtro automático de dados
Redirecionamento em caso de acesso não autorizado

Proteção de Dados:

Acesso apenas aos alunos vinculados
Dados sensíveis protegidos
Sessão segura

Validações:

Verificação de números de WhatsApp
Validação de formatos de arquivo
Controle de duplicidade


📊 Resumo das Funcionalidades



Funcionalidade
Descrição
Acesso



Dashboard
Visão geral dos filhos
✅ Completo


Câmeras
Monitoramento visual
✅ Limitado às escolas dos filhos


Frequência
Acompanhamento de presença
✅ Por aluno


Comunicados
Recebimento de mensagens
✅ Apenas recebe


Perfil
Gestão de dados pessoais
✅ Próprio perfil


Ficha
Dados completos do aluno
✅ Por aluno


Relatório
Relatórios personalizados
✅ Por aluno


Navegação
Sistema de navegação
✅ Completo



🎯 Objetivo do Perfil
O perfil Responsável foi projetado para permitir que pais e responsáveis acompanhem de forma segura e eficiente a vida escolar de seus filhos, com acesso limitado apenas aos dados necessários e funcionalidades focadas no acompanhamento da frequência e comunicação com a escola.

---

## 📞 Suporte e Contato

**Para dúvidas, suporte técnico ou informações sobre a plataforma OlharMais:**

**📱 WhatsApp:** (14) 99799-6149

**⏰ Horário de Atendimento:** Segunda a Sexta, das 8h às 18h

**📧 Email:** suporte@olharmais.com.br

**🌐 Website:** www.olharmais.com.br

---

*Documento gerado automaticamente pelo sistema OlharMais*