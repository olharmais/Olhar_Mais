// Configurações do Supabase
const supabaseConfig = {
    url: 'https://ammtxituvicldtyoqmir.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbXR4aXR1dmljbGR0eW9xbWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMDU0MTEsImV4cCI6MjA1OTg4MTQxMX0.K5cZh6KRxAGJDbU_ACE0MGFavPv5N0fL11KkCs0E9A8',
    options: {
        db: {
            schema: 'public'
        },
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
};

// Configurações do WhatsApp
const whatsappConfig = {
    apiUrl: 'https://7017.bubblewhats.com/send-message',
    apiKey: 'NTExYzUxZGIzMjc2MTAxZjJhNzhkMjAx'
};

/**
 * Função definitiva de logout - Limpa completamente a sessão e redireciona
 * Esta função está disponível globalmente para todas as páginas
 */
function limparSessaoEsair() {
    console.log("🔐 Limpando sessão completamente antes de sair...");
    
    try {
        // 1. Limpar tokens do Supabase especificamente
        localStorage.removeItem('sb-access-token');
        localStorage.removeItem('sb-refresh-token');
        localStorage.removeItem('supabase.auth.token');
        localStorage.removeItem('sb-provider-token');
        
        // 2. Limpar dados de usuário
        localStorage.removeItem('user_session');
        localStorage.removeItem('user');
        
        // 3. Limpar todas as chaves que contenham 'supabase'
        Object.keys(localStorage).forEach(key => {
            if (key.includes('supabase')) {
                localStorage.removeItem(key);
            }
        });
        
        // 4. Limpar sessionStorage
        sessionStorage.clear();
        
        // 5. Limpar todos os cookies de forma completa
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname;
        });
        
        // 6. Fazer logout do Supabase se disponível
        try {
            const supabase = createSupabaseClient();
            supabase.auth.signOut();
        } catch (e) {
            console.warn("Não foi possível executar logout do Supabase:", e);
        }
        
        // 7. Última instrução: limpar localStorage completamente
        localStorage.clear();
        
        console.log("✅ Sessão limpa com sucesso!");
        
        // 8. Adicionar timestamp para evitar cache
        const noCache = new Date().getTime();
        
        // 9. Redirecionar para a página de login
        window.location.replace('/auth.html?logout=true&nocache=' + noCache);
        
    } catch (error) {
        console.error("❌ Erro ao limpar sessão:", error);
        // Mesmo com erro, tentar redirecionar
        window.location.href = '/auth.html?logout=true';
    }
}

// Também definir a função tradicional de logout como alias para compatibilidade
function logout() {
    console.log("ℹ️ Função logout chamada, redirecionando para limparSessaoEsair...");
    limparSessaoEsair();
}

/**
 * Retorna as credenciais do Supabase
 * @returns {{url: string, key: string, options: object}} Credenciais do Supabase
 */
function getSupabaseCredentials() {
    return {
        url: supabaseConfig.url,
        key: supabaseConfig.key,
        options: supabaseConfig.options
    };
}

/**
 * Retorna as credenciais do WhatsApp
 * @returns {{apiUrl: string, apiKey: string}} Credenciais do WhatsApp
 */
function getWhatsappCredentials() {
    return {
        apiUrl: whatsappConfig.apiUrl,
        apiKey: whatsappConfig.apiKey
    };
}

/**
 * Cria e retorna um cliente do Supabase com as credenciais configuradas
 * @returns {object} Cliente do Supabase inicializado
 * @throws {Error} Se a biblioteca do Supabase não estiver carregada
 */
function createSupabaseClient() {
    // Verifica se a biblioteca está carregada
    if (typeof window.supabase === 'undefined') {
        console.error('A biblioteca Supabase não está carregada.');
        alert('Erro ao conectar ao banco de dados. Por favor, recarregue a página.');
        throw new Error('A biblioteca Supabase não está carregada. Certifique-se de incluir o script do Supabase antes de usar esta função.');
    }
    
    // Cria o cliente com as credenciais configuradas
    try {
        return window.supabase.createClient(supabaseConfig.url, supabaseConfig.key, supabaseConfig.options);
    } catch (error) {
        console.error('Erro ao criar cliente Supabase:', error);
        throw error;
    }
}

/**
 * Verifica se o cliente Supabase está funcionando corretamente
 * @returns {Promise<boolean>} Verdadeiro se o cliente estiver funcionando
 */
async function testSupabaseConnection() {
    try {
        const client = createSupabaseClient();
        const { error } = await client.from('alunos').select('id').limit(1);
        return !error;
    } catch (error) {
        console.error('Erro na conexão com Supabase:', error);
        return false;
    }
}

/**
 * Retorna a URL da API do WhatsApp
 * @returns {string} URL completa da API do WhatsApp
 */
function getWhatsappApiUrl() {
    return whatsappConfig.apiUrl;
}

/**
 * Retorna a chave de API do WhatsApp
 * @returns {string} Chave de API do WhatsApp
 */
function getWhatsappApiKey() {
    return whatsappConfig.apiKey;
}

/**
 * URL base da API do WhatsApp (sem o caminho específico)
 * @returns {string} URL base da API do WhatsApp
 */
function getWhatsappBaseUrl() {
    return whatsappConfig.apiUrl.split('/send-message')[0];
}

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getSupabaseCredentials,
        getWhatsappCredentials,
        createSupabaseClient,
        testSupabaseConnection,
        getWhatsappBaseUrl,
        getWhatsappApiUrl,
        getWhatsappApiKey,
        limparSessaoEsair,
        logout
    };
} else {
    // Exportar para uso no navegador
    window.getSupabaseCredentials = getSupabaseCredentials;
    window.getWhatsappCredentials = getWhatsappCredentials;
    window.createSupabaseClient = createSupabaseClient;
    window.testSupabaseConnection = testSupabaseConnection;
    window.getWhatsappBaseUrl = getWhatsappBaseUrl;
    window.getWhatsappApiUrl = getWhatsappApiUrl;
    window.getWhatsappApiKey = getWhatsappApiKey;
    window.limparSessaoEsair = limparSessaoEsair;
    window.logout = logout;
}

// Alertar no console se o arquivo for carregado corretamente
console.log('✅ ok');

/**
 * SISTEMA DE AUTORIZAÇÃO
 * Verificação de permissões de usuário nas páginas administrativas
 */
(function() {
    // Verificar se estamos em uma página administrativa
    if (window.location.pathname.includes('/admin/')) {
        // Função para verificar se o usuário está autenticado e tem permissão de ADMIN
        function verificarPermissaoAdmin() {
            try {
                // Buscar dados da sessão
                const sessaoUsuario = localStorage.getItem('user_session');
                
                // Se não houver sessão, redirecionar para login
                if (!sessaoUsuario) {
                    console.log('⚠️ Usuário não autenticado. Redirecionando para login...');
                    redirecionarParaLogin();
                    return false;
                }
                
                // Converter string JSON em objeto
                const dadosUsuario = JSON.parse(sessaoUsuario);
                
                // Verificar se o tipo é ADMIN
                if (dadosUsuario.tipo !== 'ADMIN') {
                    console.log('🚫 Usuário não tem permissão de ADMIN. Tipo atual:', dadosUsuario.tipo);
                    redirecionarParaLogin();
                    return false;
                }
                
                // Verificar se a sessão expirou
                if (dadosUsuario.expiry && new Date(dadosUsuario.expiry) < new Date()) {
                    console.log('⏰ Sessão expirada. Redirecionando para login...');
                    redirecionarParaLogin();
                    return false;
                }
                
                console.log('✅ Usuário autenticado como ADMIN:', dadosUsuario.nome);
                return true;
            } catch (error) {
                console.error('Erro ao verificar permissão:', error);
                redirecionarParaLogin();
                return false;
            }
        }
        
        // Função para redirecionar para a página de login
        function redirecionarParaLogin() {
            // Limpar dados locais
            localStorage.removeItem('supabase.auth.token');
            localStorage.removeItem('user_session');
            localStorage.removeItem('user');
            
            // Redirecionar, mas evitar loop infinito
            if (!window.location.pathname.includes('/auth.html')) {
                window.location.href = '/auth.html';
            }
        }
        
        // Executar verificação imediatamente
        verificarPermissaoAdmin();
    }
})();

/**
 * BOTÃO HAMBURGUER E SIDEBAR
 * Esta parte adiciona automaticamente o botão hamburguer flutuante em todas as páginas admin
 */
(function() {
    // Esperar até que o documento esteja pronto antes de executar
    function inicializarHamburger() {
        // Verifica se estamos em uma página de admin
        if (window.location.pathname.includes('/admin/')) {
            try {
                // Verificar se o documento está pronto
                if (!document.body) {
                    console.log('Documento ainda não está pronto, aguardando...');
                    // Tentar novamente em 100ms
                    setTimeout(inicializarHamburger, 100);
                    return;
                }
                
                // Adiciona o estilo CSS necessário
                const style = document.createElement('style');
                style.textContent = `
                    .hamburger-button {
                        position: fixed;
                        bottom: 1.5rem;
                        left: 1.5rem;
                        background-color: #2563eb;
                        color: white;
                        padding: 0.75rem;
                        border-radius: 9999px;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                        z-index: 1000;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    
                    .hamburger-button:hover {
                        background-color: #1d4ed8;
                    }
                    
                    @media (min-width: 768px) {
                        .hamburger-button {
                            display: none;
                        }
                    }
                    
                    @keyframes slideIn {
                        from {
                            transform: translateX(-100%);
                        }
                        to {
                            transform: translateX(0);
                        }
                    }
                    
                    .sidebar-mobile {
                        display: none;
                        position: fixed;
                        left: 0;
                        top: 0;
                        height: 100%;
                        width: 16rem;
                        background: linear-gradient(to bottom, #2563eb, #1e40af);
                        box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
                        z-index: 999;
                        overflow-y: auto;
                        animation: slideIn 0.3s forwards;
                    }
                    
                    .sidebar-mobile.active {
                        display: block;
                    }
                    
                    .sidebar-overlay {
                        display: none;
                        position: fixed;
                        inset: 0;
                        background-color: rgba(0, 0, 0, 0.5);
                        z-index: 998;
                    }
                    
                    .sidebar-overlay.active {
                        display: block;
                    }
                    
                    .menu-item {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        padding: 0.75rem 1rem;
                        color: white;
                        text-decoration: none;
                        transition: background-color 0.2s;
                    }
                    
                    .menu-item:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                        border-radius: 0.375rem;
                    }
                    
                    .menu-text {
                        font-weight: 500;
                    }
                `;
                document.head.appendChild(style);
                
                // Cria o botão hamburguer
                const hamburgerButton = document.createElement('button');
                hamburgerButton.className = 'hamburger-button';
                hamburgerButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>';
                document.body.appendChild(hamburgerButton);
                
                // Cria o overlay
                const overlay = document.createElement('div');
                overlay.className = 'sidebar-overlay';
                document.body.appendChild(overlay);
                
                // Cria o sidebar mobile
                const sidebar = document.createElement('div');
                sidebar.className = 'sidebar-mobile';
                sidebar.innerHTML = `
                    <div class="p-4 border-b border-white/10">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-xl font-bold text-white">OlharMais</span>
                        </div>
                    </div>
                    
                    <nav class="py-3 px-2">
                        <div class="space-y-1">
                            <a href="/admin/dashboard.html" class="menu-item">
                                <i class="ph ph-house text-xl"></i>
                                <span class="menu-text">Início</span>
                            </a>
                            
                            <a href="/admin/alunos.html" class="menu-item">
                                <i class="ph ph-student text-xl"></i>
                                <span class="menu-text">Alunos</span>
                            </a>
                            
                            <a href="/admin/cidades.html" class="menu-item">
                                <i class="ph ph-buildings text-xl"></i>
                                <span class="menu-text">Cidades</span>
                            </a>
                            
                            <a href="/admin/logs.html" class="menu-item">
                                <i class="ph ph-chart-line text-xl"></i>
                                <span class="menu-text">Logs</span>
                            </a>
                            
                            <a href="/admin/escolas.html" class="menu-item">
                                <i class="ph ph-graduation-cap text-xl"></i>
                                <span class="menu-text">Escolas</span>
                            </a>
                            
                            <a href="/admin/serie.html" class="menu-item">
                                <i class="ph ph-graduation-cap text-xl"></i>
                                <span class="menu-text">Séries</span>
                            </a>
                            
                            <a href="/admin/turmas.html" class="menu-item">
                                <i class="ph ph-users-three text-xl"></i>
                                <span class="menu-text">Turmas</span>
                            </a>
                            
                            <a href="/admin/cameras.html" class="menu-item">
                                <i class="ph ph-camera text-xl"></i>
                                <span class="menu-text">Câmeras</span>
                            </a>
                            
                            <a href="/admin/dispositivos.html" class="menu-item">
                                <i class="ph ph-webcam text-xl"></i>
                                <span class="menu-text">Dispositivos</span>
                            </a>
                            
                            <a href="/admin/usuarios.html" class="menu-item">
                                <i class="ph ph-user-circle text-xl"></i>
                                <span class="menu-text">Usuários</span>
                            </a>
                        </div>
                    </nav>
                    
                    <div class="absolute bottom-0 w-full p-3 border-t border-white/10">
                        <a href="#" class="menu-item" id="sidebarLogoutButton">
                            <i class="ph ph-sign-out text-xl"></i>
                            <span class="menu-text">Sair</span>
                        </a>
                    </div>
                `;
                document.body.appendChild(sidebar);
                
                // Adiciona os manipuladores de eventos
                hamburgerButton.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                    overlay.classList.toggle('active');
                });
                
                overlay.addEventListener('click', function() {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                });
                
                // Fecha o sidebar quando clicar em um link
                const menuLinks = sidebar.querySelectorAll('.menu-item');
                menuLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        sidebar.classList.remove('active');
                        overlay.classList.remove('active');
                    });
                });
                
                // Configura o botão de logout
                const logoutButton = document.getElementById('sidebarLogoutButton');
                if (logoutButton) {
                    logoutButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        limparSessaoEsair();
                    });
                }
                
                console.log('✅ ok');
            } catch (error) {
                console.error('Erro ao adicionar botão hamburguer:', error);
            }
        } else {
            console.log('⏭️ ok');
        }
    }
    
    // Iniciar após o carregamento completo da página
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarHamburger);
    } else {
        // Se o DOM já foi carregado, tente inicializar, mas com um pequeno atraso
        // para garantir que todos os scripts foram carregados
        setTimeout(inicializarHamburger, 100);
    }
})(); 