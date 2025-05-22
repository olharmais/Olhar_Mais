import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Encontrar todos os arquivos HTML na raiz e nas subpastas
function findHtmlFiles(dir) {
  let htmlFiles = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = resolve(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'node_modules' && file !== 'dist') {
      // Recursivamente buscar em subpastas
      htmlFiles = htmlFiles.concat(findHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      // Caminho relativo à raiz do projeto
      const relativePath = filePath.replace(process.cwd() + '/', '');
      htmlFiles.push(relativePath);
    }
  }
  
  return htmlFiles;
}

// Encontrar todos os arquivos HTML
const htmlFiles = findHtmlFiles('.');
const htmlEntries = {};

// Criar entradas para cada arquivo HTML
htmlFiles.forEach(file => {
  // Remover a extensão .html para o nome da entrada
  const entryName = file.replace(/\.html$/, '');
  htmlEntries[entryName] = resolve(__dirname, file);
});

export default defineConfig({
  // Diretório base para todos os caminhos relativos
  base: './',
  
  // Configurações de build
  build: {
    // Gera arquivos com caminhos relativos
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...htmlEntries
      },
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