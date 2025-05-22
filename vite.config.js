import { defineConfig } from 'vite';

export default defineConfig({
  // Diretório base para todos os caminhos relativos
  base: './',
  
  // Configurações de build
  build: {
    // Gera arquivos com caminhos relativos
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  
  // Configurações de servidor
  server: {
    port: 5173,
    open: true // Abre o navegador automaticamente
  }
}); 