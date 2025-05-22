/**
 * Alternativa à barra de navegação em iframe para evitar problemas de X-Frame-Options
 * Adiciona uma barra de navegação fixa na parte inferior da tela para dispositivos móveis
 */

// Função para limpar sessão e fazer logout
function limparSessaoEsair() {
    // Limpar o localStorage
    localStorage.removeItem('user_session');
    localStorage.removeItem('sb-tnhvnddlisxmvxafklxg-auth-token');
    
    // Redirecionar para a página inicial
    window.location.href = '/index.html';
    
    // Impedir que o evento de clique se propague
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
            url: '/responsavel/home_respo.html', 
            icon: 'house', 
            text: 'Início',
            active: currentPath.includes('home_respo')
        },
        { 
            url: '/responsavel/frequencia_respo.html', 
            icon: 'check-circle', 
            text: 'Frequência',
            active: currentPath.includes('frequencia_respo')
        },
        { 
            url: '/responsavel/perfil_respo.html', 
            icon: 'user', 
            text: 'Perfil',
            active: currentPath.includes('perfil_respo')
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