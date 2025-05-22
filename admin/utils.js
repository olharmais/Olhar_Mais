export function showToast(message, type = 'info') {
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };
    
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: colors[type],
        stopOnFocus: true
    }).showToast();
}

// Função para inicializar o sidebar
export function initializeSidebar() {
    const menuItems = document.querySelectorAll('.menu-item');
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebar = document.querySelector('.sidebar');

    // Marcar o item atual como ativo
    menuItems.forEach(item => {
        if (item.dataset.href === '2.html') {
            item.classList.add('active');
        }
    });

    // Toggle do sidebar em mobile
    document.addEventListener('click', (e) => {
        if (e.target.matches('.sidebar-overlay')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
} 