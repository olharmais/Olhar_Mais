// Importar o dotenv
const dotenv = require('dotenv');
const path = require('path');

console.log('📂 Diretório atual:', process.cwd());
console.log('🔍 Procurando arquivo .env...');

const result = dotenv.config();

if (result.error) {
    console.log('❌ Erro ao carregar .env:', result.error.message);
} else {
    console.log('✅ Arquivo .env carregado com sucesso!');
}

// Função para testar se uma variável está definida
function testarVariavel(nome) {
    const valor = process.env[nome];
    if (valor) {
        // Mostrar apenas os primeiros e últimos 4 caracteres para segurança
        const valorMascarado = valor.length > 8 
            ? `${valor.substring(0, 4)}...${valor.substring(valor.length - 4)}`
            : '****';
        
        console.log(`✅ ${nome}: ${valorMascarado}`);
        return true;
    } else {
        console.log(`❌ ${nome}: não encontrada`);
        return false;
    }
}

console.log('\n🔍 Testando variáveis de ambiente:\n');

// Testar variáveis do Supabase
const supabaseOk = [
    testarVariavel('VITE_SUPABASE_URL'),
    testarVariavel('VITE_SUPABASE_ANON_KEY')
].every(Boolean);

console.log('\n--- Supabase:', supabaseOk ? '✅' : '❌');

// Testar variáveis do WhatsApp
const whatsappOk = [
    testarVariavel('VITE_WHATSAPP_API_URL'),
    testarVariavel('VITE_WHATSAPP_API_KEY')
].every(Boolean);

console.log('\n--- WhatsApp:', whatsappOk ? '✅' : '❌');

// Resultado final
console.log('\n📝 Resultado final:', (supabaseOk && whatsappOk) ? '✅ Tudo OK!' : '❌ Algumas variáveis faltando'); 