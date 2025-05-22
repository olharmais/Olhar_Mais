import { defineConfig } from 'vite';

export default defineConfig({
  // Configuração para servir arquivos HTML diretamente
  appType: 'mpa',
  server: {
    // Abrir o navegador automaticamente
    open: '/index.html'
  },
  // Configurar aliases para facilitar importações
  resolve: {
    alias: {
      '@config': '/config',
      '@assets': '/assets'
    }
  }
}); 