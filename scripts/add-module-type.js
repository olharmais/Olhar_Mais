import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Lista de diretórios para processar
const directories = [
  '',
  'nutricionista',
  'profissional',
  'responsavel',
  'gestor'
];

// Lista de scripts que precisam do atributo type="module"
const scriptsToModify = [
  '/check-icons.js',
  '/config/supabase.js',
  'botoes_nutri.js',
  'botoes_profi.js',
  'botoes_respo.js',
  'botoes_gestor.js'
];

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Para cada script que precisa ser modificado
  scriptsToModify.forEach(script => {
    const regex = new RegExp(`<script src=["']([^"']*${script.replace('.', '\\.')})["'][^>]*>`, 'g');
    const matches = content.match(regex);

    if (matches) {
      matches.forEach(match => {
        if (!match.includes('type="module"')) {
          const newScript = match.replace('>', ' type="module">');
          content = content.replace(match, newScript);
          modified = true;
          console.log(`Modificado script ${script} em ${filePath}`);
        }
      });
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// Processa todos os arquivos HTML em cada diretório
directories.forEach(dir => {
  const dirPath = path.join(rootDir, dir);
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const filePath = path.join(dirPath, file);
        processHtmlFile(filePath);
      }
    });
  }
}); 