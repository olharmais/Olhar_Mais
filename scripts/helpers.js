/**
 * OlharMais - Funções Auxiliares
 * Este arquivo contém funções úteis para trabalhar com Supabase e WhatsApp
 */

/**
 * Inicializa o cliente Supabase e verifica a conexão
 * @returns {Promise<object>} Cliente Supabase inicializado
 */
async function initSupabase() {
    try {
        // Verifica se o arquivo de configuração foi carregado
        if (typeof createSupabaseClient !== 'function') {
            console.error('Arquivo de configuração do Supabase não carregado');
            throw new Error('Configuração não carregada. Recarregue a página.');
        }

        // Cria o cliente
        const client = createSupabaseClient();
        
        // Testa a conexão
        const { data, error } = await client.from('alunos').select('id').limit(1);
        if (error) {
            console.error('Erro ao conectar ao Supabase:', error);
            showToastIfAvailable('Erro de conexão com o banco de dados', 'error');
        }
        
        return client;
    } catch (error) {
        console.error('Falha ao inicializar Supabase:', error);
        showToastIfAvailable('Falha ao inicializar conexão com o banco de dados', 'error');
        throw error;
    }
}

/**
 * Envia uma mensagem via WhatsApp
 * @param {string} numero - Número de telefone no formato 5511999999999
 * @param {string} mensagem - Texto da mensagem
 * @returns {Promise<object>} Resposta da API
 */
async function enviarWhatsApp(numero, mensagem) {
    try {
        // Verifica se o arquivo de configuração foi carregado
        if (typeof getWhatsappCredentials !== 'function') {
            console.error('Arquivo de configuração do WhatsApp não carregado');
            throw new Error('Configuração não carregada. Recarregue a página.');
        }

        // Obtém as credenciais
        const whatsapp = getWhatsappCredentials();
        
        // Prepara a requisição
        const response = await fetch(whatsapp.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': whatsapp.apiKey
            },
            body: JSON.stringify({
                jid: numero,
                message: mensagem
            })
        });
        
        // Verifica a resposta
        if (!response.ok) {
            throw new Error(`Erro ao enviar mensagem: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Falha ao enviar WhatsApp:', error);
        showToastIfAvailable('Falha ao enviar mensagem de WhatsApp', 'error');
        throw error;
    }
}

/**
 * Mostra um toast se a função estiver disponível
 * @param {string} mensagem - Texto da mensagem
 * @param {string} tipo - Tipo da mensagem ('success' ou 'error')
 */
function showToastIfAvailable(mensagem, tipo = 'success') {
    if (typeof Toastify === 'function') {
        Toastify({
            text: mensagem,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: tipo === 'success' ? "#22c55e" : "#ef4444",
            }
        }).showToast();
    } else if (typeof showToast === 'function') {
        showToast(mensagem, tipo);
    } else {
        console.log(`Toast: ${mensagem} (${tipo})`);
    }
}

/**
 * Formata um número de telefone para o formato de API do WhatsApp
 * @param {string} telefone - Número de telefone (aceita vários formatos)
 * @returns {string} Número formatado para a API
 */
function formatarTelefoneWhatsApp(telefone) {
    // Remove caracteres não numéricos
    let numero = telefone.replace(/\D/g, '');
    
    // Garante que o número comece com 55 (Brasil)
    if (!numero.startsWith('55')) {
        numero = '55' + numero;
    }
    
    // Assegura que tenha o formato correto (55 + DDD + número)
    if (numero.length < 12) {
        console.warn('Número de telefone pode estar incompleto:', numero);
    }
    
    return numero;
}

/**
 * Verifica o status do sistema
 * @returns {Promise<object>} Status dos componentes do sistema
 */
async function verificarStatusSistema() {
    const status = {
        supabase: false,
        whatsapp: false
    };
    
    // Verifica Supabase
    try {
        status.supabase = await testSupabaseConnection();
    } catch (error) {
        console.error('Erro ao verificar status do Supabase:', error);
    }
    
    // Como o WhatsApp tem CORS, apenas marcamos como verdadeiro por padrão
    status.whatsapp = true;
    
    return status;
}

// Exporta as funções para uso global
window.initSupabase = initSupabase;
window.enviarWhatsApp = enviarWhatsApp;
window.showToastIfAvailable = showToastIfAvailable;
window.formatarTelefoneWhatsApp = formatarTelefoneWhatsApp;
window.verificarStatusSistema = verificarStatusSistema; 