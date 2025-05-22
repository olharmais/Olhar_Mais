# Guia de Implementação de Segurança - Projeto OlharMais

## 1. EXPOSIÇÃO DE DADOS SENSÍVEIS
Identificamos exposição de dados sensíveis no console e DevTools que precisam ser corrigidos em todos os arquivos do projeto.

### Arquivos que Precisam de Revisão:
- Todos os arquivos que fazem chamadas à API do WhatsApp
- Arquivos que manipulam dados de usuário
- Arquivos com logs de debug
- Arquivos que fazem requisições ao Supabase

## 2. MEDIDAS DE SEGURANÇA A SEREM IMPLEMENTADAS

### 2.1 Proteção do Console
Adicionar no `<head>` de cada página:
```javascript
<script>
    (function() {
        // Salvar referências originais
        const originalConsole = {
            log: console.log,
            error: console.error,
            warn: console.warn,
            info: console.info
        };

        // Função para sanitizar dados sensíveis
        function sanitizeData(data) {
            if (typeof data === 'string') {
                // Mascarar números de telefone
                data = data.replace(/(\d{2})(\d{4,5})(\d{4})/g, '(**)*****-$3');
                // Mascarar URLs e chaves
                data = data.replace(/(https?:\/\/[^\s]*|key|token|auth|whatsapp|@[^\s]*)/gi, '[PROTEGIDO]');
                return data;
            }
            if (typeof data === 'object' && data !== null) {
                const safeObj = Array.isArray(data) ? [] : {};
                for (let key in data) {
                    if (key.toLowerCase().includes('key') || 
                        key.toLowerCase().includes('token') || 
                        key.toLowerCase().includes('auth') ||
                        key.toLowerCase().includes('password') ||
                        key.toLowerCase().includes('secret')) {
                        safeObj[key] = '[PROTEGIDO]';
                    } else {
                        safeObj[key] = sanitizeData(data[key]);
                    }
                }
                return safeObj;
            }
            return data;
        }

        // Sobrescrever funções do console
        console.log = function(...args) {
            const sanitizedArgs = args.map(arg => sanitizeData(arg));
            originalConsole.log.apply(console, sanitizedArgs);
        };

        console.error = function(...args) {
            const sanitizedArgs = args.map(arg => {
                if (arg instanceof Error) {
                    const safeError = new Error(sanitizeData(arg.message));
                    safeError.stack = '[STACK TRACE OMITIDO]';
                    return safeError;
                }
                return sanitizeData(arg);
            });
            originalConsole.error.apply(console, sanitizedArgs);
        };

        console.warn = console.info = function(...args) {
            const sanitizedArgs = args.map(arg => sanitizeData(arg));
            originalConsole.warn.apply(console, sanitizedArgs);
        };

        // Desabilitar em produção
        if (window.location.hostname !== 'localhost' && 
            window.location.hostname !== '127.0.0.1') {
            console.log = console.error = console.warn = 
            console.info = console.debug = function() {};
        }
    })();
</script>
```

### 2.2 Proteção do Fetch
Adicionar logo após a proteção do console:
```javascript
<script>
    (function() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const [resource, config] = args;
            
            if (resource.includes('whatsapp') || 
                (config?.body && config.body.includes('whatsapp'))) {
                try {
                    const response = await originalFetch(resource, config);
                    const clone = response.clone();
                    
                    response.json = async () => {
                        const data = await clone.json();
                        return {
                            status: data.status,
                            response: {
                                status: data.response?.status || 'PENDING',
                                messageId: '[PROTEGIDO]'
                            }
                        };
                    };
                    return response;
                } catch (error) {
                    console.error('Erro de comunicação:', 'ERR_UNKNOWN');
                    throw new Error('Erro de comunicação');
                }
            }
            return originalFetch(...args);
        };
    })();
</script>
```

### 2.3 Boas Práticas para Requisições

1. **Envio de Dados Sensíveis:**
```javascript
// ANTES ❌
const response = await fetch(apiUrl, {
    body: JSON.stringify({
        phone: userPhone,
        message: secretCode
    })
});

// DEPOIS ✅
const requestBody = {
    id: btoa(userPhone),
    type: 'VERIFICATION'
};

const headers = {
    'X-Message-Content': btoa(secretCode)
};

const response = await fetch(apiUrl, {
    body: JSON.stringify(requestBody),
    headers: headers
});
```

2. **Tratamento de Respostas:**
```javascript
// ANTES ❌
console.log('Resposta:', result);

// DEPOIS ✅
console.log('Status:', result.status ? 'Sucesso' : 'Falha');
```

### 2.4 Checklist de Implementação

Para cada arquivo do projeto:

- [ ] Adicionar proteção do console
- [ ] Adicionar proteção do fetch
- [ ] Revisar todos os console.log
- [ ] Sanitizar dados em requisições
- [ ] Proteger respostas sensíveis
- [ ] Testar em modo desenvolvimento
- [ ] Verificar DevTools (Network, Console)
- [ ] Validar em produção

### 2.5 Arquivos Prioritários para Revisão

1. Autenticação:
   - auth.html
   - login.js
   - register.js

2. Comunicação:
   - whatsapp.js
   - notifications.js

3. Perfis:
   - perfil_*.html
   - user_management.js

4. APIs:
   - api_handlers.js
   - supabase.js

## 3. OBSERVAÇÕES IMPORTANTES

1. **Nunca expor no console:**
   - Números de telefone
   - Códigos de verificação
   - URLs completas
   - Tokens/Chaves
   - IDs de mensagens
   - Dados de usuário

2. **Em produção:**
   - Console completamente desabilitado
   - Respostas sempre sanitizadas
   - Dados sensíveis sempre codificados

3. **Desenvolvimento local:**
   - Usar dados de teste
   - Sanitizar mesmo em localhost
   - Manter logs mínimos necessários

## 4. SUPORTE

Para dúvidas ou problemas na implementação:
1. Verificar este guia
2. Consultar a documentação técnica
3. Contatar a equipe de segurança

---

**IMPORTANTE:** Este é um processo contínuo. Sempre que novos arquivos forem adicionados ao projeto, estas medidas de segurança devem ser implementadas.