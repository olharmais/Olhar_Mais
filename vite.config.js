import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'auth.html'),
        // Adicione outras páginas HTML aqui se necessário
      }
    }
  },
  // Configuração para servir arquivos HTML diretamente
  appType: 'mpa',
  server: {
    // Abrir o navegador automaticamente
    open: '/index.html'
  },
  // Configurar aliases para facilitar importações
  resolve: {
    alias: {
      '@config': resolve(__dirname, 'config'),
      '@assets': resolve(__dirname, 'assets')
    }
  },
  // Configuração para copiar arquivos estáticos
  publicDir: 'public'
}); 