import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Configuração para servir arquivos HTML diretamente
  appType: 'mpa',
  
  // Configurar o diretório de build
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        // Páginas principais
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'auth.html'),
        aprovacao: resolve(__dirname, 'aprovacao.html'),

        // Páginas do Nutricionista
        nutri_navbar: resolve(__dirname, 'nutricionista/navbar_nutri.html'),
        nutri_perfil: resolve(__dirname, 'nutricionista/perfil_nutri.html'),
        nutri_frequencia: resolve(__dirname, 'nutricionista/frequencia_nutri.html'),
        nutri_home: resolve(__dirname, 'nutricionista/home_nutri.html'),
        nutri_notificacoes: resolve(__dirname, 'nutricionista/notificacoes_nutri.html'),
        nutri_ficha_aluno: resolve(__dirname, 'nutricionista/ficha_aluno.html'),

        // Páginas do Profissional
        profi_navbar: resolve(__dirname, 'profissional/navbar_profi.html'),
        profi_perfil: resolve(__dirname, 'profissional/perfil_profi.html'),
        profi_frequencia: resolve(__dirname, 'profissional/frequencia_profi.html'),
        profi_cameras: resolve(__dirname, 'profissional/cameras_profi.html'),
        profi_home: resolve(__dirname, 'profissional/home_profi.html'),
        profi_notificacoes: resolve(__dirname, 'profissional/notificacoes_profi.html'),
        profi_metricas: resolve(__dirname, 'profissional/metricas_profi.html'),
        profi_ficha_aluno: resolve(__dirname, 'profissional/ficha_aluno.html'),

        // Páginas do Responsável
        respo_navbar: resolve(__dirname, 'responsavel/navbar_respo.html'),
        respo_perfil: resolve(__dirname, 'responsavel/perfil_respo.html'),
        respo_cameras: resolve(__dirname, 'responsavel/cameras_respo.html'),
        respo_home: resolve(__dirname, 'responsavel/home_respo.html'),
        respo_frequencia: resolve(__dirname, 'responsavel/frequencia_respo.html'),
        respo_notificacoes: resolve(__dirname, 'responsavel/notificacoes_respo.html'),
        respo_ficha_aluno: resolve(__dirname, 'responsavel/ficha_aluno.html'),

        // Páginas do Gestor
        gestor_navbar: resolve(__dirname, 'gestor/navbar_gestor.html'),
        gestor_perfil: resolve(__dirname, 'gestor/perfil_gestor.html'),
        gestor_frequencia: resolve(__dirname, 'gestor/frequencia_gestor.html'),
        gestor_cameras: resolve(__dirname, 'gestor/cameras_gestor.html'),
        gestor_metricas: resolve(__dirname, 'gestor/metricas_gestor.html'),
        gestor_ficha_aluno: resolve(__dirname, 'gestor/ficha_aluno.html'),
        gestor_criar_notificacao: resolve(__dirname, 'gestor/criar_notificacao.html'),
        gestor_home: resolve(__dirname, 'gestor/home_gestor.html'),
        gestor_notificacoes: resolve(__dirname, 'gestor/notificacoes_gestor.html')
      }
    },
    // Configurações adicionais de build
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  },

  // Configuração do servidor de desenvolvimento
  server: {
    port: 5173,
    open: '/index.html'
  },

  // Configurar aliases para facilitar importações
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@config': resolve(__dirname, './config'),
      '@assets': resolve(__dirname, './assets'),
      '@nutricionista': resolve(__dirname, './nutricionista'),
      '@profissional': resolve(__dirname, './profissional'),
      '@responsavel': resolve(__dirname, './responsavel'),
      '@gestor': resolve(__dirname, './gestor')
    }
  }
}); 