require('dotenv').config();

// Exporta as variáveis de ambiente do WhatsApp
module.exports = {
    whatsappApiUrl: process.env.WHATSAPP_API_URL,
    whatsappApiKey: process.env.WHATSAPP_API_KEY,
    // Adicione outras variáveis de ambiente conforme necessário
}; 