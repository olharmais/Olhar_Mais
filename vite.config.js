import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';

// Encontrar todos os arquivos HTML na raiz e nas subpastas (de forma mais simples)
function findHtmlFiles(dir) {
  let htmlFiles = {};
  
  function scanDir(directory, baseDir = '') {
    const files = readdirSync(directory);
    
    for (const file of files) {
      const filePath = resolve(directory, file);
      const relativePath = baseDir ? `${baseDir}/${file}` : file;
      
      if (statSync(filePath).isDirectory() && 
          file !== 'node_modules' && 
          file !== 'dist' && 
          file !== '.git') {
        // Recursivamente procurar em subdiretórios
        scanDir(filePath, relativePath);
      } else if (file.endsWith('.html')) {
        // Adicionar arquivo HTML encontrado
        const entryName = relativePath.replace(/\.html$/, '');
        htmlFiles[entryName] = filePath;
      }
    }
  }
  
  scanDir(dir);
  return htmlFiles;
}

// Encontrar arquivos HTML
const htmlEntries = findHtmlFiles('.');

export default defineConfig({
  // Diretório base para todos os caminhos relativos
  base: './',
  
  // Configurações de build
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...htmlEntries
      }
    }
  },
  
  // Configurações do servidor
  server: {
    port: 5173,
    open: true
  }
}); 