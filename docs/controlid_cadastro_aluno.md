# Processo de Cadastro de Aluno no Dispositivo ControlID

## Visão Geral do Processo
O cadastro de um aluno no dispositivo ControlID envolve 4 etapas principais:
1. Autenticação e obtenção de sessão
2. Configuração do monitor para logs
3. Criação do usuário no dispositivo
4. Upload e processamento da foto

## 1. Autenticação e Obtenção de Sessão

### Endpoint: `/login.fcgi`
- **Método**: POST
- **Headers**: 
  ```
  Content-Type: application/json
  ```
- **Body**:
  ```json
  {
    "login": "admin",
    "password": "admin"
  }
  ```
- **Resposta Esperada**:
  ```json
  {
    "session": "abc123xyz..."
  }
  ```

### Exemplo Prático de Implementação:
```javascript
async function connectToDevice(ipAddressWithPort, login, password) {
    try {
        const loginResponse = await fetch(`http://${ipAddressWithPort}/login.fcgi`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        });

        if (!loginResponse.ok) {
            throw new Error(`Erro ao conectar: ${loginResponse.status}`);
        }

        const loginData = await loginResponse.json();
        return loginData.session;
    } catch (error) {
        throw new Error(`Falha na conexão: ${error.message}`);
    }
}
```

## 2. Configuração do Monitor

### Endpoint: `/set_configuration.fcgi?session={session}`
- **Método**: POST
- **Headers**: 
  ```
  Content-Type: application/json
  ```
- **Body**:
  ```json
  {
    "monitor": {
      "request_timeout": "5000",
      "hostname": "https://fqia6z1078.execute-api.us-east-1.amazonaws.com",
      "port": "443",
      "path": "dev/log"
    }
  }
  ```

### Exemplo Prático de Implementação:
```javascript
async function setupMonitor(ipAddressWithPort, session) {
    try {
        const monitorResponse = await fetch(
            `http://${ipAddressWithPort}/set_configuration.fcgi?session=${session}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    monitor: {
                        request_timeout: "5000",
                        hostname: "https://fqia6z1078.execute-api.us-east-1.amazonaws.com",
                        port: "443",
                        path: "dev/log"
                    }
                })
            }
        );

        if (!monitorResponse.ok) {
            throw new Error(`Erro na configuração: ${monitorResponse.status}`);
        }

        return await monitorResponse.json();
    } catch (error) {
        throw new Error(`Falha na configuração: ${error.message}`);
    }
}
```

## 3. Criação do Usuário

### Endpoint: `/create_objects.fcgi?session={session}`
- **Método**: POST
- **Headers**: 
  ```
  Content-Type: application/json
  ```
- **Body**:
  ```json
  {
    "object": "users",
    "values": [
      {
        "name": "Nome do Aluno",
        "registration": "ID_DO_ALUNO",
        "password": "123456",
        "salt": ""
      }
    ]
  }
  ```

### Exemplo Prático de Implementação:
```javascript
async function createUserInDevice(ipAddressWithPort, session, userName, alunoId) {
    try {
        const createUserResponse = await fetch(
            `http://${ipAddressWithPort}/create_objects.fcgi?session=${session}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    object: "users",
                    values: [
                        {
                            name: userName,
                            registration: alunoId.toString(),
                            password: "123456",
                            salt: ""
                        }
                    ]
                })
            }
        );

        if (!createUserResponse.ok) {
            throw new Error(`Erro ao criar usuário: ${createUserResponse.status}`);
        }

        const userData = await createUserResponse.json();
        return userData.ids[0]; // Retorna o ID gerado pelo dispositivo
    } catch (error) {
        throw new Error(`Falha ao criar usuário: ${error.message}`);
    }
}
```

## 4. Upload e Processamento da Foto

### Pré-processamento da Imagem
Antes de enviar a foto para o dispositivo, é necessário processá-la para atender aos requisitos:

```javascript
async function preprocessImage(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const TARGET_WIDTH = 480;
            const TARGET_HEIGHT = 640;
            
            canvas.width = TARGET_WIDTH;
            canvas.height = TARGET_HEIGHT;
            
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Calcular proporção mantendo aspecto
            let scale, offsetX = 0, offsetY = 0;
            if (img.width / img.height > TARGET_WIDTH / TARGET_HEIGHT) {
                scale = TARGET_HEIGHT / img.height;
                offsetX = (TARGET_WIDTH - (img.width * scale)) / 2;
            } else {
                scale = TARGET_WIDTH / img.width;
                offsetY = (TARGET_HEIGHT - (img.height * scale)) / 2;
            }
            
            // Desenhar imagem centralizada
            ctx.drawImage(
                img, 
                offsetX, 
                offsetY, 
                img.width * scale, 
                img.height * scale
            );
            
            // Melhorar qualidade
            ctx.filter = 'contrast(110%) saturate(110%) brightness(105%)';
            ctx.drawImage(canvas, 0, 0);
            
            // Converter para JPEG
            canvas.toBlob(resolve, 'image/jpeg', 0.9);
        };
        
        const reader = new FileReader();
        reader.onload = e => img.src = e.target.result;
        reader.readAsDataURL(file);
    });
}
```

### Upload da Foto

### Endpoint: `/user_set_image.fcgi?user_id={user_id}&timestamp={timestamp}&match=0&session={session}`
- **Método**: POST
- **Headers**: 
  ```
  Content-Type: application/octet-stream
  ```

### Exemplo Prático de Implementação:
```javascript
async function uploadImageToDevice(ipAddressWithPort, session, userId, imageFile) {
    try {
        const reader = new FileReader();
        const readFilePromise = new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
        
        reader.readAsArrayBuffer(imageFile);
        const arrayBuffer = await readFilePromise;
        
        const timestamp = Math.floor(Date.now() / 1000);
        const url = `http://${ipAddressWithPort}/user_set_image.fcgi?user_id=${userId}&timestamp=${timestamp}&match=0&session=${session}`;
        
        const uploadResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            body: new Uint8Array(arrayBuffer)
        });

        if (!uploadResponse.ok) {
            throw new Error(`Erro no upload: ${uploadResponse.status}`);
        }

        const uploadData = await uploadResponse.json();
        
        if (uploadData.success === false) {
            throw new Error(`Falha no upload: ${uploadData.errors[0].message}`);
        }

        return uploadData;
    } catch (error) {
        throw new Error(`Falha no upload: ${error.message}`);
    }
}
```

## Códigos de Erro e Soluções

### Erros de Autenticação (1-2)
- **1**: Credenciais inválidas
  - Solução: Verificar login/senha do dispositivo
- **2**: Sessão expirada
  - Solução: Realizar nova autenticação

### Erros de Imagem (3-4)
- **3**: Formato inválido
  - Solução: Converter para JPEG
- **4**: Arquivo muito grande
  - Solução: Comprimir imagem ou reduzir dimensões

### Erros de Reconhecimento Facial (10-16)
- **10**: Rosto não detectado
  - Solução: Verificar iluminação e enquadramento
- **11**: Múltiplos rostos
  - Solução: Usar foto individual
- **12**: Rosto pequeno
  - Solução: Aproximar rosto na foto
- **13**: Baixa qualidade
  - Solução: Melhorar iluminação e foco
- **14**: Iluminação ruim
  - Solução: Usar iluminação frontal adequada
- **15**: Rosto obstruído
  - Solução: Remover máscaras/óculos
- **16**: Pose incorreta
  - Solução: Usar pose frontal

## Exemplo de Fluxo Completo

```javascript
async function cadastrarAlunoNoDispositivo(dispositivo, aluno, fotoFile) {
    try {
        // 1. Conectar ao dispositivo
        const session = await connectToDevice(
            `${dispositivo.ip}:${dispositivo.porta || '9090'}`,
            dispositivo.login,
            dispositivo.senha
        );

        // 2. Configurar monitor
        await setupMonitor(
            `${dispositivo.ip}:${dispositivo.porta || '9090'}`,
            session
        );

        // 3. Criar usuário
        const deviceUserId = await createUserInDevice(
            `${dispositivo.ip}:${dispositivo.porta || '9090'}`,
            session,
            aluno.nome_completo,
            aluno.id
        );

        // 4. Processar e enviar foto
        if (fotoFile) {
            const processedImage = await preprocessImage(fotoFile);
            await uploadImageToDevice(
                `${dispositivo.ip}:${dispositivo.porta || '9090'}`,
                session,
                deviceUserId,
                processedImage
            );
        }

        return deviceUserId;
    } catch (error) {
        throw new Error(`Erro no cadastro: ${error.message}`);
    }
}
```

## Dicas e Boas Práticas

1. **Tratamento de Erros**
   - Implementar retry para falhas de rede
   - Validar respostas de cada etapa
   - Manter logs detalhados

2. **Otimização de Imagens**
   - Pré-processar antes do upload
   - Garantir dimensões corretas
   - Manter qualidade adequada

3. **Segurança**
   - Não expor credenciais no frontend
   - Validar dados antes do envio
   - Tratar timeouts adequadamente

4. **Performance**
   - Processar imagens no cliente
   - Usar compressão adequada
   - Implementar feedback visual 