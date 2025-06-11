// Lista de ícones necessários
const requiredIcons = [
    '/favicon/favicon.svg',
    '/favicon/favicon.ico',
    '/favicon/safari-pinned-tab.svg',
    '/assets/images/icons/icon-16x16.png',
    '/assets/images/icons/icon-32x32.png',
    '/assets/images/icons/icon-72x72.png',
    '/assets/images/icons/icon-96x96.png',
    '/assets/images/icons/icon-128x128.png',
    '/assets/images/icons/icon-144x144.png',
    '/assets/images/icons/icon-152x152.png',
    '/assets/images/icons/icon-192x192.png',
    '/assets/images/icons/icon-384x384.png',
    '/assets/images/icons/icon-512x512.png'
];
  
// Função para verificar se um ícone existe
async function checkIcon(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
  }
  
  // Verificar todos os ícones
async function checkAllIcons() {
    const results = await Promise.all(
        requiredIcons.map(async icon => {
            const exists = await checkIcon(icon);
            return { icon, exists };
        })
    );

    const missingIcons = results.filter(r => !r.exists).map(r => r.icon);
    
    if (missingIcons.length > 0) {
        console.warn('⚠️ Ícones faltando:', missingIcons);
    } else {
        console.log('✅ Todos os ícones estão presentes');
    }
}

// Executar a verificação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', checkAllIcons); 