// Script para verificar e reparar os ícones do PWA
document.addEventListener('DOMContentLoaded', function() {
  console.log('Verificando ícones do PWA...');
  
  // Lista de ícones para verificar
  const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
  
  // Função para verificar se um ícone carrega corretamente
  function checkIcon(size) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ size, status: 'ok' });
      img.onerror = () => resolve({ size, status: 'error' });
      img.src = `/assets/images/icons/icon-${size}x${size}.png?v=${new Date().getTime()}`;
    });
  }
  
  // Verificar todos os ícones
  Promise.all(iconSizes.map(size => checkIcon(size)))
    .then(results => {
      console.table(results);
      
      // Mostrar alerta se houver problemas
      const failed = results.filter(r => r.status === 'error');
      if (failed.length > 0) {
        console.error(`Problemas encontrados em ${failed.length} ícones:`, 
          failed.map(f => `${f.size}x${f.size}`).join(', '));
        
        // Criar um aviso na página
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.bottom = '20px';
        div.style.left = '20px';
        div.style.right = '20px';
        div.style.padding = '12px';
        div.style.backgroundColor = 'rgba(220, 53, 69, 0.9)';
        div.style.color = 'white';
        div.style.borderRadius = '8px';
        div.style.zIndex = '9999';
        div.style.fontSize = '14px';
        div.textContent = `⚠️ Atenção: Foram encontrados problemas em ${failed.length} ícones do PWA. 
          Isso pode afetar a instalação como aplicativo.`;
        document.body.appendChild(div);
        
        // Removê-lo após 10 segundos
        setTimeout(() => div.remove(), 10000);
      }
    });
});

// Função para verificar se os ícones estão carregados corretamente
window.addEventListener('load', function() {
    const icons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    
    icons.forEach(icon => {
        const img = new Image();
        img.src = icon.href;
        
        img.onerror = () => {
            console.warn(`Ícone não encontrado: ${icon.href}`);
        };
    });
}); 