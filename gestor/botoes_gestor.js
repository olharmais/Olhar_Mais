/**
 * Alternativa à barra de navegação em iframe para evitar problemas de X-Frame-Options
 * Adiciona uma barra de navegação fixa na parte inferior da tela para dispositivos móveis
 */

// Função para limpar sessão e fazer logout
async function limparSessaoEsair() {
    try {
        // 1. Limpar todos os tipos de storage
        localStorage.clear();
        sessionStorage.clear();
        
        // 2. Limpar cookies de forma mais agressiva
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
            
            // Tentar remover o cookie de todas as formas possíveis
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname};secure`;
        }
        
        // 3. Limpar cache do Service Worker
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                await registration.unregister();
            }
        }

        // 4. Limpar todos os tipos de cache
        if (window.caches) {
            const keys = await caches.keys();
            await Promise.all(keys.map(key => caches.delete(key)));
        }

        // 5. Tentar limpar cache do navegador usando a API Cache Storage
        try {
            const hasCache = await caches.has('cache-v1');
            if (hasCache) {
                await caches.delete('cache-v1');
            }
        } catch (e) {
            console.warn('Erro ao limpar cache storage:', e);
        }

        // 6. Limpar dados específicos do Supabase e da aplicação
        const keysToRemove = Object.keys(localStorage).filter(key => 
            key.startsWith('sb-') || 
            key.includes('supabase') ||
            key.includes('auth') ||
            key.includes('user') ||
            key.includes('token') ||
            key.includes('session')
        );
        keysToRemove.forEach(key => localStorage.removeItem(key));

        // 7. Forçar recarregamento sem cache
        const clearCacheAndReload = () => {
            // Adicionar parâmetro aleatório para evitar cache
            const timestamp = new Date().getTime();
            const clearParam = `?clear=${timestamp}`;
            
            // Forçar recarregamento sem cache
            if (window.location.href.includes('clear=')) {
                window.location.href = '/index.html' + clearParam;
            } else {
                window.location.href = '/index.html' + clearParam;
            }
        };

        // 8. Tentar limpar o histórico de navegação se possível
        if (window.history && window.history.pushState) {
            window.history.pushState({}, '', window.location.href);
        }

        // 9. Se disponível, usar a API de gerenciamento de cache
        if ('caches' in window) {
            try {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
            } catch (e) {
                console.warn('Erro ao limpar caches:', e);
            }
        }

        // 10. Limpar IndexedDB
        if (window.indexedDB) {
            try {
                const databases = await window.indexedDB.databases();
                databases.forEach(db => {
                    window.indexedDB.deleteDatabase(db.name);
                });
            } catch (e) {
                console.warn('Erro ao limpar IndexedDB:', e);
            }
        }

        // 11. Tentar usar a API de Clear Site Data se disponível
        try {
            await fetch('/clear-site-data', {
                method: 'POST',
                headers: {
                    'Clear-Site-Data': '"cache", "cookies", "storage"'
                }
            });
        } catch (e) {
            console.warn('Clear-Site-Data não suportado:', e);
        }

        // 12. Por fim, recarregar a página
        setTimeout(clearCacheAndReload, 100);

    } catch (error) {
        console.error('Erro ao limpar dados:', error);
        // Mesmo com erro, tentar recarregar
        window.location.href = '/index.html?clear=' + new Date().getTime();
    }
    
    return false;
}

function adicionarBarraNavegacao() {
    // Verificar se já existe uma barra de navegação
    if (document.querySelector('.mobile-navbar-alt')) return;
    
    // Criar o contêiner da barra de navegação
    const navbar = document.createElement('div');
    navbar.className = 'mobile-navbar-alt';
    navbar.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #0061FF;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        padding: 0;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    `;

    // Criar container interno para limitar largura
    const container = document.createElement('div');
    container.style.cssText = `
        max-width: 992px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    
    // Obter o caminho atual
    const currentPath = window.location.pathname;
    
    // Definir os itens de menu
    const menuItems = [
        { 
            url: '/gestor/home_gestor.html', 
            icon: 'house', 
            text: 'Início',
            active: currentPath.includes('home_gestor')
        },
        { 
            url: '/gestor/frequencia_gestor.html', 
            icon: 'check-circle', 
            text: 'Frequência',
            active: currentPath.includes('frequencia_gestor')
        },
        { 
            url: '/gestor/perfil_gestor.html', 
            icon: 'user', 
            text: 'Perfil',
            active: currentPath.includes('perfil_gestor')
        },
        {
            url: '#',
            icon: 'sign-out',
            text: 'Sair',
            active: false,
            onClick: limparSessaoEsair
        }
    ];
    
    // Adicionar os itens de menu
    menuItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        if (item.onClick) {
            link.onclick = (e) => {
                e.preventDefault();
                item.onClick();
            };
        }
        link.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            text-decoration: none;
            font-size: 0.75rem;
            width: 25%;
            height: 100%;
            transition: all 0.2s ease;
            gap: 4px;
            -webkit-tap-highlight-color: transparent;
        `;
        
        if (item.active) {
            link.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }
        
        // Adicionar ícone
        const icon = document.createElement('i');
        icon.className = `ph ph-${item.icon}`;
        icon.style.fontSize = '1.5rem';
        
        // Adicionar texto
        const text = document.createElement('span');
        text.textContent = item.text;
        
        link.appendChild(icon);
        link.appendChild(text);
        container.appendChild(link);
    });
    
    // Adicionar container à barra de navegação
    navbar.appendChild(container);
    
    // Adicionar à página
    document.body.appendChild(navbar);
    
    // Adicionar estilo para ajustar o espaçamento da página
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 767px) {
            body {
                padding-bottom: 60px;
            }
            
            @media (display-mode: standalone) {
                .mobile-navbar-alt {
                    padding-bottom: env(safe-area-inset-bottom);
                    height: calc(60px + env(safe-area-inset-bottom));
                }
            }
        }
        
        @media (min-width: 768px) {
            .mobile-navbar-alt {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Adicionar a navegação quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', adicionarBarraNavegacao);

// Exportar a função para uso em outros scripts
if (typeof window !== 'undefined') {
    window.adicionarBarraNavegacao = adicionarBarraNavegacao;
}

// Alias para compatibilidade com código existente
window.carregarNavbar = adicionarBarraNavegacao; 