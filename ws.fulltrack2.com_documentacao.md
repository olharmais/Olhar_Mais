RESTrack
Documentação para acesso aos dados da plataforma de rastreamento e logistica Fulltrack
Api de integração com a platforma Fulltrack.

Alerts
Alerts | All
Busca todos os eventos de alertas em aberto.

get
https://ws.fulltrack2.com/alerts/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              _id: "564a32471b945286a05d3a8b"
              ras_eal_descricao: "Ignição ligada"
              ras_eal_id_cliente: 9447
              ras_eal_id_indice: 500081
              ras_eal_id_evento: "564a32475faa34f34feccdc3"
              ras_eal_id_alerta_tipo: 50
              ras_eal_data_alerta: "16/11/2015 19:45:11"
              ras_eal_id_referencia: 0
              ras_eal_id_veiculo: 44119,
              ras_eal_latitude: -22.585238,
              ras_eal_longitude: -46.681011
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Alerts | Close
Fecha um evento no sistema.

post
https://ws.fulltrack2.com/alerts/close/id/:id
Parâmetro
Campo	Tipo	Descrição
ras_eal_motivo	Number	
Id referente ao motivo do fechamento do alerta.

ras_eal_obs	String	
Observação sobre o fechamento.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Alerts | Period
Busca todos os eventos de alertas de um período.

get
https://ws.fulltrack2.com/alerts/period/initial/:initial/final/:final
Parâmetro
Campo	Tipo	Descrição
initial	String	
Unixtime inicial do peíodo (ras_eal_data_alerta).

final	String	
Unixtime final do peíodo (ras_eal_data_alerta).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              _id: "564a32471b945286a05d3a8b"
              ras_eal_descricao: "Ignição ligada"
              ras_eal_id_cliente: 9447
              ras_eal_id_indice: 500081
              ras_eal_id_evento: "564a32475faa34f34feccdc3"
              ras_eal_id_alerta_tipo: 50
              ras_eal_data_alerta: "16/11/2015 19:45:11"
              ras_eal_id_referencia: 0
              ras_eal_id_veiculo: 44119
              ras_eal_baixado: 1,
              ras_eal_motivo: 3,
              ras_eal_descricao_motivo: "Roubo",
              ras_eal_obs: "Roubo do veículo",
              ras_eal_latitude: -22.585238,
              ras_eal_longitude: -46.681011
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Alerts | Types
Busca a lista com todos os tipos de eventos do Fulltrack.

post
https://ws.fulltrack2.com/alerts/types
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
         ras_eat_id: "1"
         ras_eat_descricao: "Pânico"
     }-
     1:  {
         ras_eat_id: "2"
         ras_eat_descricao: "Jamming"
     }-
     2:  {
         ras_eat_id: "3"
         ras_eat_descricao: "Limite Velocidade"
     }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Authorize
Authorize | Client
Autoriza um usuário na plataforma Fulltrack.

post
https://ws.fulltrack2.com/authorize/client
Parâmetro
Campo	Tipo	Descrição
ras_usu_login	String	
Nome de usuário.

ras_usu_senha	String	
Senha do usuário.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
             loginOK: true
         }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Usuário incorreto):
Resposta de Erro (Senha incorreta):
HTTP/1.1 404 Not Found
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
             loginOK: false,
             detail: "invalid username"
         }
 
 }
Clients
Clients | Active
Ativa um cliente bloqueado.

put
https://ws.fulltrack2.com/clients/active
Parâmetro
Campo	Tipo	Descrição
ras_cli_id	String	
Id do cliente (ras_cli_id).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Clients | All
Busca todos os clientes cadastrados.

get
https://ws.fulltrack2.com/clients/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_cli_id: "4454"
              ras_cli_desc: "Dauto Maciel"
              ras_cli_razao: "Dauto Maciel"
              ras_cli_endereco: "rua tapajós"
              ras_cli_bairro: "labienopolis"
              ras_cli_cep: "17400"
              ras_cli_uf: "são paulo"
              ras_cli_cidade: "garça"
              ras_cli_cnpj: "41683043880"
              ras_cli_tipo: "F"
              ras_cli_data_cadastro: "2013-12-26 21:02:15"
              ras_cli_data_alteracao: "2015-09-15 13:25:07"
              ras_cli_liberado: "S"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Clients | Deactive
Bloqueia o acesso de um cliente ativo.

put
https://ws.fulltrack2.com/clients/deactive
Parâmetro
Campo	Tipo	Descrição
ras_cli_id	Numeric	
Id do cliente (ras_cli_id).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Clients | Save
Cria um novo cliente na plataforma Fulltrack.

put
https://ws.fulltrack2.com/clients/save
Parâmetro
Campo	Tipo	Descrição
ras_cli_desc	String	
Descrição do cliente.

ras_cli_tipo	String	
Tipo do cliente (F para físico e J para jurídico).

ras_cli_razao	String	
Razão Social.

ras_cli_endereco	String	
Endereço do cliente (ex. R. Vargas, 54).

ras_cli_bairro	String	
Bairro do cliente.

ras_cli_cep	String	
Codigo cep do cliente.

ras_cli_uf	String	
Estado do cliente.

ras_cli_cidade	String	
Cidade do cliente.

ras_cli_cnpj	String	
Cnpj/Cpf do cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_cli_id: "123456789"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Clients | Single
Busca um único cliente com base no id.

get
https://ws.fulltrack2.com/clients/single/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Numeric	
Id do cliente (ras_cli_id).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_cli_id: "4454"
              ras_cli_desc: "Dauto Maciel"
              ras_cli_razao: "Dauto Maciel"
              ras_cli_endereco: "rua tapajós"
              ras_cli_bairro: "labienopolis"
              ras_cli_cep: "17400"
              ras_cli_uf: "são paulo"
              ras_cli_cidade: "garça"
              ras_cli_cnpj: "41683043880"
              ras_cli_tipo: "F"
              ras_cli_data_cadastro: "2013-12-26 21:02:15"
              ras_cli_data_alteracao: "2015-09-15 13:25:07"
              ras_cli_liberado: "S"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Clients | Uf
Lista os estados do Brasil.

get
https://ws.fulltrack2.com/clients/uf
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              id: "1"
              uf: "AC"
              nome: "Acre "
          }
     1:  {
              id: "2"
              uf: "AL"
              nome: "Alagoas "
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Clients | Update
Atualiza um cliente existente na plataforma Fulltrack.

post
https://ws.fulltrack2.com/clients/update/id/:id
Parâmetro
Campo	Tipo	Descrição
ras_cli_desc	String	
Descrição do cliente.

ras_cli_tipo	String	
Tipo do cliente (F para físico e J para jurídico).

ras_cli_razao	String	
Razão Social.

ras_cli_endereco	String	
Endereço do cliente (ex. R. Vargas, 54).

ras_cli_bairro	String	
Bairro do cliente.

ras_cli_cep	String	
Codigo cep do cliente.

ras_cli_uf	String	
Estado do cliente.

ras_cli_cidade	String	
Cidade do cliente.

ras_cli_cnpj	String	
Cnpj/Cpf do cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true,
     message: "Successfully change!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false,
     message: "Error updated data!"
}
Clients | User
Atualiza as informações de login e perfil do cliente.

put
https://ws.fulltrack2.com/clients/user
Parâmetro
Campo	Tipo	Descrição
ras_cli_id	Numeric	
Id do cliente (ras_cli_id).

ras_pfl_id	Numeric	
Id do perfil de usuário.

ras_usu_login	String	
Id do usuário (Opcional).

ras_usu_senha	String	
Id do usuário (Opcional).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successfully change!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Cliente não encontrado):
Resposta de Erro (Perfil incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Commands
Commands | Cancel
Cancela o envio de um comando, caso ele ainda não tenha sido enviado.

post
https://ws.fulltrack2.com/commands/direct
Parâmetro
Campo	Tipo	Descrição
comando_string	String	
String do comando.

ras_ras_id_aparelho	String	
Id do equipamento (ras_ras_id_aparelho).

comando_descricao	String	
Descrição do comando.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_com_id: 123456789
          }
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Equipamento incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Invalid Tracker"
}
Commands | List
Lista os comandos disponíveis para um equipamento.

get
https://ws.fulltrack2.com/commands/list/id/:id
Parâmetro
Campo	Tipo	Descrição
id	String	
Id do produto.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_stc_id: "599"
              ras_stc_descricao: "Tipo de Bloqueio"
          }
     1:  {
              ras_stc_id: "555"
              ras_stc_descricao: "Liga saidas"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Commands | Status
Exibe informações de um comando enviado.

get
https://ws.fulltrack2.com/commands/status/id/:id
Parâmetro
Campo	Tipo	Descrição
id	String	
Id do comando enviado.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              veiculo: "LMU2720 TANQUE - LMU2720T",
              descricao_comando: "requisita_config",
              produto: "LMU 2630/2720",
              status_do_comando: "Enviado",
              data_enviado: "2015-11-18 16:18:50",
              data_retorno: "2015-11-18 16:18:50",
              valor_retorno: ""
          }
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Contacts
Contacts | Save
Cria uma novo contato para o cliente.

put
https://ws.fulltrack2.com/contacts/save
Parâmetro
Campo	Tipo	Descrição
ras_ccn_cli_id	Number	
Id do cliente (ras_cli_id).

ras_ccn_contato	String	
Descrição do contato.

ras_ccn_ddi_celular	Number	
Telefone do contato.

ras_ccn_ddi_telefone	Number	
Telefone do contato.

ras_ccn_num_telefone	Number	
Telefone do contato.

ras_ccn_num_celular	Number	
Telefone do contato.

ras_ccn_email	String	
E-mail do contato.

ras_ccn_email_alerta	Number	
Envia alerta por e-mail (1 para sim e 0 para não).

ras_ccn_sms_alerta	Number	
Envia alerta por sms (1 para sim e 0 para não).

ras_ccn_email_master	Number	
Este é o contato principal (1 para sim e 0 para não).

ras_ccn_obs	String	
Campo para adicionar alguma observação sobre o contato.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successfully create!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Cliente incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Contacts | Single
Busca todos os contatos de um cliente.

get
https://ws.fulltrack2.com/contacts/single/id/:id
Parâmetro
Campo	Tipo	Descrição
id	String	
Id do cliente (ras_cli_id).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ccn_id: "44130"
              ras_ccn_contato: "Ana Beatriz"
              ras_ccn_telefone: "1444444444"
              ras_ccn_email: "teste@teste.com.br"
              ras_ccn_email_alerta: "0"
              ras_ccn_sms_alerta: "0"
              ras_ccn_obs: ""
              ras_ccn_email_master: "1"
              ras_ccn_cli_id: "4454"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Contacts | Update
Atualiza um contato.

put
https://ws.fulltrack2.com/contacts/update/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id do contato (ras_ccn_id).

ras_ccn_contato	String	
Descrição do contato.

ras_ccn_ddi_celular	Number	
Telefone do contato.

ras_ccn_ddi_telefone	Number	
Telefone do contato.

ras_ccn_num_telefone	Number	
Telefone do contato.

ras_ccn_num_celular	Number	
Telefone do contato.

ras_ccn_email	String	
E-mail do contato.

ras_ccn_email_alerta	Number	
Envia alerta por e-mail (1 para sim e 0 para não).

ras_ccn_sms_alerta	Number	
Envia alerta por sms (1 para sim e 0 para não).

ras_ccn_email_master	Number	
Este é o contato principal (1 para sim e 0 para não).

ras_ccn_obs	String	
Campo para adicionar alguma observação sobre o contato.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true,
     message: "Successfully updated!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Drivers
Drivers | Client
Busca a lista de motorista por cliente.

get
https://ws.fulltrack2.com/drivers?client=99999
Parâmetro
Campo	Tipo	Descrição
client	Number	
Id referente ao cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
         "ras_mot_id": "1234567",
         "ras_mot_nome": "Motorista X",
         "ras_mot_cpf": "450450455054",
         "ras_mot_cnh": "123456123456"
     },

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Events
Events | All
Busca a última posição de todos os veículos.

get
https://ws.fulltrack2.com/events/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
               ras_vei_placa: "ST940",
               ras_vei_tipo: 7,
               ras_mot_nome: "PADRAO",
               ras_prd_id: 7,
               ras_ras_id_aparelho: "171672",
               ras_cli_desc: "Dauto Maciel",
               ras_ras_id: 70113,
               ras_ras_data_ult_comunicacao: null,
               ras_cli_id: 4454,
               ras_vei_veiculo: "ST940",
               ras_vei_id: 60075,
               ras_vei_tag_identificacao: "ST940",
               ras_eve_latitude: "2799007260",
               ras_eve_longitude: "-22.215966",
               ras_eve_voltagem_backup: null,
               ras_eve_porc_bat_backup: 100,
               ras_eve_data_gps: "20/11/2015 17:50:33",
               ras_eve_data_enviado: "20/11/2015 17:50:59",
               ras_ras_sinal_gps: 0,
               ras_eve_ignicao: 0,
               ras_eve_gps_status: 0,
               ras_eve_voltagem: 0,
               ras_eve_satelites: 0,
               ras_eve_velocidade: -49,
               sensor_temperatura: {
                    "digital_1": 35,
                    "analog_1": 40,
                    "analog_2": 39,
               }
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Events | Interval
Busca um intervalo de posições de um veículo.

get
https://ws.fulltrack2.com/events/interval/id/:id/begin/:timestamp/end/:timestamp
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
               ras_vei_placa: "ST940",
               ras_vei_tipo: 7,
               ras_mot_nome: "PADRAO",
               ras_prd_id: 7,
               ras_ras_id_aparelho: "171672",
               ras_cli_desc: "Dauto Maciel",
               ras_ras_id: 70113,
               ras_ras_data_ult_comunicacao: null,
               ras_cli_id: 4454,
               ras_vei_veiculo: "ST940",
               ras_vei_id: 60075,
               ras_vei_tag_identificacao: "ST940",
               ras_eve_latitude: "2799007260",
               ras_eve_longitude: "-22.215966",
               ras_eve_voltagem_backup: null,
               ras_eve_porc_bat_backup: 100,
               ras_eve_data_gps: "20/11/2015 17:50:33",
               ras_eve_data_enviado: "20/11/2015 17:50:59",
               ras_ras_sinal_gps: 0,
               ras_eve_ignicao: 0,
               ras_eve_gps_status: 0,
               ras_eve_voltagem: 0,
               ras_eve_satelites: 0,
               ras_eve_velocidade: -49
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Events | Pagination
Busca a última posição de todos os veículos páginados.

get
https://ws.fulltrack2.com/events/pagination
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     pages: 1
     data: [1]
          "pages": []
              0:  4
          "eventos": []
              0:  {
               ras_vei_placa: "ST940",
               ras_vei_tipo: 7,
               ras_mot_nome: "PADRAO",
               ras_prd_id: 7,
               ras_ras_id_aparelho: "171672",
               ras_cli_desc: "Dauto Maciel",
               ras_ras_id: 70113,
               ras_ras_data_ult_comunicacao: null,
               ras_cli_id: 4454,
               ras_vei_veiculo: "ST940",
               ras_vei_id: 60075,
               ras_vei_tag_identificacao: "ST940",
               ras_eve_latitude: "2799007260",
               ras_eve_longitude: "-22.215966",
               ras_eve_voltagem_backup: null,
               ras_eve_porc_bat_backup: 100,
               ras_eve_data_gps: "20/11/2015 17:50:33",
               ras_eve_data_enviado: "20/11/2015 17:50:59",
               ras_ras_sinal_gps: 0,
               ras_eve_ignicao: 0,
               ras_eve_gps_status: 0,
               ras_eve_voltagem: 0,
               ras_eve_satelites: 0,
               ras_eve_velocidade: -49,
               sensor_temperatura: {
                    "digital_1": 35,
                    "analog_1": 40,
                    "analog_2": 39,
               }
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Events | Single
Busca a última posição de um veículo.

get
https://ws.fulltrack2.com/events/single/id/:id
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
               ras_vei_placa: "ST940",
               ras_vei_tipo: 7,
               ras_mot_nome: "PADRAO",
               ras_prd_id: 7,
               ras_ras_id_aparelho: "171672",
               ras_cli_desc: "Dauto Maciel",
               ras_ras_id: 70113,
               ras_ras_data_ult_comunicacao: null,
               ras_cli_id: 4454,
               ras_vei_veiculo: "ST940",
               ras_vei_id: 60075,
               ras_vei_tag_identificacao: "ST940",
               ras_eve_latitude: "2799007260",
               ras_eve_longitude: "-22.215966",
               ras_eve_voltagem_backup: null,
               ras_eve_porc_bat_backup: 100,
               ras_eve_data_gps: "20/11/2015 17:50:33",
               ras_eve_data_enviado: "20/11/2015 17:50:59",
               ras_ras_sinal_gps: 0,
               ras_eve_ignicao: 0,
               ras_eve_gps_status: 0,
               ras_eve_voltagem: 0,
               ras_eve_satelites: 0,
               ras_eve_velocidade: -49
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Events | Telemetry
Busca um intervalo de informações de telemetria de um veículo.

get
https://ws.fulltrack2.com/events/telemetry/id/:id/begin/:timestamp/end/:timestamp
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {

          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Fence
Fence | All
Busca a lista de cercas.

get
https://ws.fulltrack2.com/fence/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
    HTTP/1.1 200 OK
{
    "status": true,
    "message": [
        [
            {
                "fence_id": "180914",
                "ras_vei_id_cli": "75215",
                "coordinates": [
                    [
                        "-22.195034406936198",
                        "-49.67605590820312"
                    ],
                    [
                        "-22.203934867884968",
                        "-49.571685791015625"
                    ],
                    [
                        "-22.295449681012183",
                        "-49.665069580078125"
                    ]
                ],
                "ras_vei_id": [
                    "102030",
                    "302010"
                ],
                "contacts_id": [
                    "103655",
                    "213213123"
                ],
                "ras_cer_observacao": "fence name teste",
                "start_time": "01:01:01",
                "end_time": "00:10:00",
                "is_active": false,
                "color": "red",
                "days_active": {
                    "monday": false,
                    "tuesday": false,
                    "wednesday": false,
                    "thursday": false,
                    "friday": false,
                    "saturday": false,
                    "sunday": false
                },
                "shipping_settings": {
                    "send_alert_client": false,
                    "send_alert_email": false,
                    "send_alert_fullarm": false,
                    "send_alert_in_screen": false,
                    "send_alert_mobile": false,
                    "send_alert_monitoring": false
                },
                "generate_alerts": {
                    "ignition_on": false,
                    "ignition_off": false,
                    "inside_fence": false,
                    "outside_fence": false,
                    "speed_limit": {
                        "is_active": false,
                        "limit": 0
                    },
                    "time_on": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_off": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_inside_fence": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_outside_fence": {
                        "is_active": false,
                        "time": "00:00:00"
                    }
                }
            }
        ]
    ]
}
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Fence | Client
Busca as ações de cerca por cliente do período selecionado

get
https://ws.fulltrack2.com/fence/client/id/:id/initial/:initial/final/:final
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao cliente.

initial	String	
Unixtime inicial do período.

final	String	
Unixtime final do período.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
             "ras_vei_id": "123415",
             "ras_vei_placa": "BJK-1234",
             "ras_vei_veiculo": "VOYAGE",
             "ras_vei_id_cli": "321654",
             "ras_cer_observacao": "Casa",
             "data_entrada": "-",
             "data_saida": "13/03/2019 00:42:10",
             "tempo_permanencia": "-"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Fence | Delete
Deleta uma única cerca pelo ID.

delete
https://ws.fulltrack2.com//fence/delete/id/:id
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
    HTTP/1.1 200 OK
{
    "status": true,
    "message": "Data removed success!"
}
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Fence | Save
Cria uma nova cerca na plataforma Fulltrack.

put
https://ws.fulltrack2.com/fence/save
Parâmetro
Campo	Tipo	Descrição
group_id	Numeric	
id do grupo de veiculos.

color	Hexadecimal	
cor da cerca.

is_active	Boolean	
habilita a cerca.

ras_vei_id_cli	Numeric	
id do cliente.

end_time	String	
HH:MM:SS horário de desativação.

start_time	String	
HH:MM:SS horário de ativação.

ras_cer_observacao	String	
breve descrição ou nome da cerca.

ras_vei_id	Array	
contém os veiculos vinculados a cerca.

contacts_id	Array	
contém os contatos vinculados a cerca.

days_active	Array	
contém os dias em a cerca estará ativa.

send_alert_email	Boolean	
envia alertas por email.

send_alert_client	Boolean	
envia alertas para o cliente.

send_alert_mobile	Boolean	
envia alertas para os contatos.

send_alert_fullarm	Boolean	
envia alertas para o fullarm.

send_alert_in_screen	Boolean	
envia alertas na plataforma.

send_alert_monitoring	Boolean	
envia alertas para o monitoramento.

ignition_on	Boolean	
gera alertas por ignição ligada.

ignition_off	Boolean	
gera alertas por ignição desligada.

inside_fence	Boolean	
gera alertas por entrar na cerca.

outside_fence	Boolean	
gera alertas por sair na cerca.

speed_limit	Object	
gera alertas por excesso de velocidade.

time_inside_fence	Object	
gera alertas por tempo dentro da cerca.

time_outside_fence	Object	
gera alertas por tempo fora da cerca.

time_on	Object	
gera alertas por tempo de ignição ligada.

time_off	Object	
gera alertas por tempo de ignição desligada.

coordinates	Array	
coordenadas da cerca.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Fomatação para enviar os dados:
Resposta de Sucesso:
{
    "group_id": 0,
    "color": "black",
    "is_active": true,
    "ras_vei_id_cli": 75215,
    "end_time": "00:10:00",
    "start_time": "01:01:01",
    "ras_cer_observacao": "fence name teste",
    "ras_vei_id": [
        102030,
        302010
    ],
    "contacts_id": [
        103655,
        213213123
    ],
    "days_active": {
        "monday": false,
        "tuesday": true,
        "wednesday": true,
        "thursday": true,
        "friday": false,
        "saturday": false,
        "sunday": false
    },
    "shipping_settings": {
        "send_alert_email": true,
        "send_alert_client": true,
        "send_alert_mobile": true,
        "send_alert_fullarm": false,
        "send_alert_in_screen": true,
        "send_alert_monitoring": false
    },
    "generate_alerts": {
        "ignition_on": true,
        "ignition_off": false,
        "inside_fence": true,
        "outside_fence": false,
        "speed_limit": {
            "is_active": true,
            "limit": 20
        },
        "time_inside_fence": {
            "is_active": true,
            "time": "00:10:00"
        },
        "time_outside_fence": {
            "is_active": false,
            "time": "00:00:00"
        },
        "time_on": {
            "is_active": false,
            "time": "01:00:00"
        },
        "time_off": {
            "is_active": false,
            "time": "00:10:00"
        }
    },
    "coordinates": [
        [
            "-22.195034406936198",
            "-49.67605590820312"
        ],
        [
            "-22.203934867884968",
            "-49.571685791015625"
        ],
        [
            "-22.295449681012183",
            "-49.665069580078125"
        ]
    ]
}
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Fence | Single
Busca uma única cerca pelo ID.

get
https://ws.fulltrack2.com/fence/single/id/:id
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
    HTTP/1.1 200 OK
{
    "status": true,
    "message": [
        [
            {
                "fence_id": "180914",
                "ras_vei_id_cli": "75215",
                "coordinates": [
                    [
                        "-22.195034406936198",
                        "-49.67605590820312"
                    ],
                    [
                        "-22.203934867884968",
                        "-49.571685791015625"
                    ],
                    [
                        "-22.295449681012183",
                        "-49.665069580078125"
                    ]
                ],
                "ras_vei_id": [
                    "102030",
                    "302010"
                ],
                "contacts_id": [
                    "103655",
                    "213213123"
                ],
                "ras_cer_observacao": "fence name teste",
                "start_time": "01:01:01",
                "end_time": "00:10:00",
                "is_active": false,
                "color": "red",
                "days_active": {
                    "monday": false,
                    "tuesday": false,
                    "wednesday": false,
                    "thursday": false,
                    "friday": false,
                    "saturday": false,
                    "sunday": false
                },
                "shipping_settings": {
                    "send_alert_client": false,
                    "send_alert_email": false,
                    "send_alert_fullarm": false,
                    "send_alert_in_screen": false,
                    "send_alert_mobile": false,
                    "send_alert_monitoring": false
                },
                "generate_alerts": {
                    "ignition_on": false,
                    "ignition_off": false,
                    "inside_fence": false,
                    "outside_fence": false,
                    "speed_limit": {
                        "is_active": false,
                        "limit": 0
                    },
                    "time_on": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_off": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_inside_fence": {
                        "is_active": false,
                        "time": "00:00:00"
                    },
                    "time_outside_fence": {
                        "is_active": false,
                        "time": "00:00:00"
                    }
                }
            }
        ]
    ]
}
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Fence | Update
Edita uma nova cerca na plataforma Fulltrack.

post
https://ws.fulltrack2.com/fence/update/id/:id
Parâmetro
Campo	Tipo	Descrição
group_id	Numeric	
id do grupo de veiculos.

color	Hexadecimal	
cor da cerca.

is_active	Boolean	
habilita a cerca.

ras_vei_id_cli	Numeric	
id do cliente.

end_time	String	
HH:MM:SS horário de desativação.

start_time	String	
HH:MM:SS horário de ativação.

ras_cer_observacao	String	
breve descrição ou nome da cerca.

ras_vei_id	Array	
contém os veiculos vinculados a cerca.

contacts_id	Array	
contém os contatos vinculados a cerca.

days_active	Array	
contém os dias em a cerca estará ativa.

send_alert_email	Boolean	
envia alertas por email.

send_alert_client	Boolean	
envia alertas para o cliente.

send_alert_mobile	Boolean	
envia alertas para os contatos.

send_alert_fullarm	Boolean	
envia alertas para o fullarm.

send_alert_in_screen	Boolean	
envia alertas na plataforma.

send_alert_monitoring	Boolean	
envia alertas para o monitoramento.

ignition_on	Boolean	
gera alertas por ignição ligada.

ignition_off	Boolean	
gera alertas por ignição desligada.

inside_fence	Boolean	
gera alertas por entrar na cerca.

outside_fence	Boolean	
gera alertas por sair na cerca.

speed_limit	Object	
gera alertas por excesso de velocidade.

time_inside_fence	Object	
gera alertas por tempo dentro da cerca.

time_outside_fence	Object	
gera alertas por tempo fora da cerca.

time_on	Object	
gera alertas por tempo de ignição ligada.

time_off	Object	
gera alertas por tempo de ignição desligada.

coordinates	Array	
coordenadas da cerca.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Fomatação para enviar os dados:
Resposta de Sucesso:
{
    "group_id": 0,
    "color": "black",
    "is_active": true,
    "ras_vei_id_cli": 75215,
    "end_time": "00:10:00",
    "start_time": "01:01:01",
    "ras_cer_observacao": "fence name teste",
    "ras_vei_id": [
        102030,
        302010
    ],
    "contacts_id": [
        103655,
        213213123
    ],
    "days_active": {
        "monday": false,
        "tuesday": true,
        "wednesday": true,
        "thursday": true,
        "friday": false,
        "saturday": false,
        "sunday": false
    },
    "shipping_settings": {
        "send_alert_email": true,
        "send_alert_client": true,
        "send_alert_mobile": true,
        "send_alert_fullarm": false,
        "send_alert_in_screen": true,
        "send_alert_monitoring": false
    },
    "generate_alerts": {
        "ignition_on": true,
        "ignition_off": false,
        "inside_fence": true,
        "outside_fence": false,
        "speed_limit": {
            "is_active": true,
            "limit": 20
        },
        "time_inside_fence": {
            "is_active": true,
            "time": "00:10:00"
        },
        "time_outside_fence": {
            "is_active": false,
            "time": "00:00:00"
        },
        "time_on": {
            "is_active": false,
            "time": "01:00:00"
        },
        "time_off": {
            "is_active": false,
            "time": "00:10:00"
        }
    },
    "coordinates": [
        [
            "-22.195034406936198",
            "-49.67605590820312"
        ],
        [
            "-22.203934867884968",
            "-49.571685791015625"
        ],
        [
            "-22.295449681012183",
            "-49.665069580078125"
        ]
    ]
}
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Fence | Vehicle
Busca as ações de cerca por veículo do período selecionado

get
https://ws.fulltrack2.com/fence/vehicle/id/:id/initial/:initial/final/:final
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao veículo.

initial	String	
Unixtime inicial do período.

final	String	
Unixtime final do período.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
             "ras_vei_id": "123415",
             "ras_vei_placa": "BJK-1234",
             "ras_vei_veiculo": "VOYAGE",
             "ras_vei_id_cli": "321654",
             "ras_cer_observacao": "Casa",
             "data_entrada": "13/03/2019 04:21:04",
             "data_saida": "13/03/2019 05:23:36",
             "tempo_permanencia": "01:02:32"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Passenger
Passenger | All
Busca a lista dos passageiros cadastrados.

get
https://ws.fulltrack2.com/passenger/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              "ras_pas_id": "204",
              "ras_pas_nome": "Rafael",
              "ras_pas_rfid": "7867738",
              "ras_pas_empresa": "Rastreadores",
              "ras_pas_setor": "",
              "ras_pas_cargo": "Motorista",
              "ras_pas_data_cadastro": "2018-03-27 19:50:39",
              "ras_pas_id_cli": "150491"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Profiles
Profiles | Event
Lista os perfis de usuário.

get
https://ws.fulltrack2.com/profiles/event
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_pfl_flt_eve_id: "7559",
              ras_pfl_flt_eve_desc_perfil: "Teste de Manutenção"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Profiles | User
Lista os perfis de usuário.

get
https://ws.fulltrack2.com/profiles/user
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_pfl_id: "907",
              ras_pfl_desc: "teste"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Reference Points
Reference Points | All
Busca a lista de pontos de referência.

get
https://ws.fulltrack2.com/referencepoints/all
Parâmetro
Campo	Tipo	Descrição
limit	Number	
Limite de dados.

offset	Number	
Posição de inicio dos dados.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              "ras_ref_id": "1234567",
               "ras_ref_descricao": "Ponto teste",
               "ras_ref_latitude": "-21.475031",
               "ras_ref_longitude": "-47.028704",
               "ras_ref_icone": "office-building",
               "ras_ref_uf": "SP",
               "ras_ref_cidade": "Bauru",
               "ras_ref_pais": "Brasil",
               "ras_ref_id_cli": "15931",
               "ras_ref_id_indice": "670",
               "ras_ref_data_cadastro": "2016-12-06 10:09:15",
               "ras_ref_data_ult_alteracao": "2017-04-01 16:18:37"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Reference Points | Client
Busca a lista de pontos de referência por ID do cliente.

get
https://ws.fulltrack2.com/referencepoints/client/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              "ras_ref_id": "1234567",
               "ras_ref_descricao": "Ponto teste",
               "ras_ref_latitude": "-21.475031",
               "ras_ref_longitude": "-47.028704",
               "ras_ref_icone": "office-building",
               "ras_ref_uf": "SP",
               "ras_ref_cidade": "Bauru",
               "ras_ref_pais": "Brasil",
               "ras_ref_id_cli": "15931",
               "ras_ref_id_indice": "670",
               "ras_ref_data_cadastro": "2016-12-06 10:09:15",
               "ras_ref_data_ult_alteracao": "2017-04-01 16:18:37"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Reference Points | Count Client
Conta a quantidade dos pontos de referência por ID do cliente.

get
https://ws.fulltrack2.com/referencepoints/countClient/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
               "total": "5"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Reference Points | CountAll
Conta a quantidade de pontos de referência

get
https://ws.fulltrack2.com/referencepoints/countAll
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              "total": "2",
          }
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Reference Points | Single
Busca um ponto de referência pelo ID.

get
https://ws.fulltrack2.com/referencepoints/single/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao Ponto de referência.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              "ras_ref_id": "1234567",
               "ras_ref_descricao": "Ponto teste",
               "ras_ref_latitude": "-21.475031",
               "ras_ref_longitude": "-47.028704",
               "ras_ref_icone": "office-building",
               "ras_ref_uf": "SP",
               "ras_ref_cidade": "Bauru",
               "ras_ref_pais": "Brasil",
               "ras_ref_id_cli": "15931",
               "ras_ref_id_indice": "670",
               "ras_ref_data_cadastro": "2016-12-06 10:09:15",
               "ras_ref_data_ult_alteracao": "2017-04-01 16:18:37"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Trackers
Trackers | All
Busca a lista de rastreadores.

get
https://ws.fulltrack2.com/trackers/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ras_id: "33373"
              ras_ras_id_aparelho: "4631277443"
              ras_ras_status: "1"
              ras_ras_prd_id: "33"
              ras_ras_cli_id: "16598"
              ras_ras_chip: "1111111111"
              ras_ras_linha: "1111111"
              ras_ras_data_ult_comunicacao: "2014-07-28 12:37:42"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Trackers | Deactive
Atualiza um rastreador na plataforma Fulltrack.

put
https://ws.fulltrack2.com/trackers/deactive
Parâmetro
Campo	Tipo	Descrição
ras_ras_id_aparelho	Hexadecimal	
Id do equipamento.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true,
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Rastreador invalido):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Fail!"
}
Trackers | Products
Busca um único rastreador pelo ID.

get
https://ws.fulltrack2.com/trackers/products
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_prd_id: "34",
              ras_prd_desc: "F/Cell",
              ras_prd_fabricante: "Fulltime",
              ras_prd_modelo: "01",
              ras_prd_versao: "1.0"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Trackers | Save
Cria um novo rastreador na plataforma Fulltrack.

put
https://ws.fulltrack2.com/trackers/save
Parâmetro
Campo	Tipo	Descrição
ras_ras_id_aparelho	Hexadecimal	
Id do equipamento.

ras_ras_prd_id	Numeric	
Id do produto.

ras_ras_chip	Numeric	
Id do chip.

ras_ras_linha	Numeric	
Número da linha.

ras_ras_imei	Numeric	
Imei do equipamento.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ras_id: "123456789"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Cliente incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Trackers | Single
Busca um único rastreador pelo ID.

get
https://ws.fulltrack2.com/trackers/single/id/:id
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ras_id: "33373"
              ras_ras_id_aparelho: "4631277443"
              ras_ras_status: "1"
              ras_ras_prd_id: "33"
              ras_ras_cli_id: "16598"
              ras_ras_chip: "1111111111"
              ras_ras_linha: "1111111"
              ras_ras_data_ult_comunicacao: "2014-07-28 12:37:42"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Trackers | Update
Atualiza um rastreador na plataforma Fulltrack.

post
https://ws.fulltrack2.com/trackers/update
Parâmetro
Campo	Tipo	Descrição
ras_ras_id_aparelho	Hexadecimal	
Id do equipamento.

ras_ras_prd_id	Numeric	
Id do produto.

ras_ras_chip	Numeric	
Id do chip.

ras_ras_linha	Numeric	
Número da linha.

ras_ras_imei	Numeric	
Imei do equipamento.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true,
     message: "Successfully change!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Cliente não pode ser alterado):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Vehicles
Vehicles | All
Busca a lista de veículos.

get
https://ws.fulltrack2.com/vehicles/all
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vei_id: "6285",
              ras_vei_id_cli: "2728",
              ras_vei_placa: "LMU2720ib",
              ras_vei_veiculo: "2720 I-Button",
              ras_vei_chassi: "111111",
              ras_vei_ano: "111",
              ras_vei_cor: "111",
              ras_vei_tipo: "1",
              ras_vei_fabricante: "18",
              ras_vei_modelo: "111",
              ras_vei_combustivel: "2",
              ras_vei_consumo: "11111",
              ras_vei_velocidade_limite: "1111",
              ras_vei_odometro: "0",
              ras_vei_data_cadastro: "2013-09-10",
              ras_vei_data_ult_alt: "2015-10-14 13:17:07",
              ras_vei_equipamento: null
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Client
Busca a lista de veículos por ID do cliente.

get
https://ws.fulltrack2.com/vehicles/client/id/:id
Parâmetro
Campo	Tipo	Descrição
id	Number	
Id referente ao cliente.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0: {
          "ras_vei_id": "145474",
          "ras_vei_id_cli": "15931",
          "ras_vei_placa": "TST-6633",
          "ras_vei_veiculo": "Ninja 300 Huss",
          "ras_vei_chassi": "x",
          "ras_vei_ano": "",
          "ras_vei_cor": "",
          "ras_vei_tipo": "10",
          "ras_vei_fabricante": "166",
          "ras_vei_modelo": "",
          "ras_vei_combustivel": "1",
          "ras_vei_consumo": "",
          "ras_vei_velocidade_limite": "0",
          "ras_vei_odometro": "0",
          "ras_vei_data_cadastro": "2017-09-01",
          "ras_vei_data_ult_alt": "2017-10-27 11:14:44",
          "ras_vei_equipamento": "151970",
          "ras_vei_vin": ""
      }
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | getByDate
Busca a lista de veículos que tiveram alteração apartir de uma data específicada.

POST
https://ws.fulltrack2.com/vehicles/getByDate
Parâmetro
Campo	Tipo	Descrição
date	Date	
Data no formato Y-m-d H:i:s que você deseja buscar os veículos que tiveram alteração.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vei_id: "6285",
              ras_vei_id_cli: "2728",
              ras_vei_placa: "LMU2720ib",
              ras_vei_veiculo: "2720 I-Button",
              ras_vei_chassi: "111111",
              ras_vei_ano: "111",
              ras_vei_cor: "111",
              ras_vei_tipo: "1",
              ras_vei_fabricante: "18",
              ras_vei_modelo: "111",
              ras_vei_combustivel: "2",
              ras_vei_consumo: "11111",
              ras_vei_velocidade_limite: "1111",
              ras_vei_odometro: "0",
              ras_vei_data_cadastro: "2013-09-10",
              ras_vei_data_ult_alt: "2015-10-14 13:17:07",
              ras_vei_equipamento: null
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Manufacturer
Busca a lista de fabricantes de veículos.

get
https://ws.fulltrack2.com/vehicles/manufacturer
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vei_id: "6285",
              ras_vei_id_cli: "2728",
              ras_vei_placa: "LMU2720ib",
              ras_vei_veiculo: "2720 I-Button",
              ras_vei_chassi: "111111",
              ras_vei_ano: "111",
              ras_vei_cor: "111",
              ras_vei_tipo: "1",
              ras_vei_fabricante: "18",
              ras_vei_modelo: "111",
              ras_vei_combustivel: "2",
              ras_vei_consumo: "11111",
              ras_vei_velocidade_limite: "1111",
              ras_vei_odometro: "0",
              ras_vei_data_cadastro: "2013-09-10",
              ras_vei_data_ult_alt: "2015-10-14 13:17:07",
              ras_vei_equipamento: null
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Profile
Altera o perfil de eventos de um veículo.

put
https://ws.fulltrack2.com/vehicles/profile
Parâmetro
Campo	Tipo	Descrição
ras_vei_id	Numeric	
Id do veículo.

ras_pfl_flt_eve_id	Numeric	
Id do perfil de eventos.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successfully change!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Perfil incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Save
Cria um novo veículo na plataforma Fulltrack.

put
https://ws.fulltrack2.com/vehicles/save
Parâmetro
Campo	Tipo	Descrição
ras_vei_id_cli	Numeric	
Id do cliente.

ras_vei_placa	String	
Placa do veículo.

ras_vei_veiculo	String	
Descrição do veículo.

ras_vei_chassi	String	
Número da chassi.

ras_vei_ano	Numeric	
Ano de fabricação do veículo.

ras_vei_cor	String	
Cor do veículo.

ras_vei_tipo	Numeric	
Tipo do veículo.

ras_vei_modelo	String	
Modelo do veículo.

ras_vei_combustivel	Numeric	
Combustível.

ras_vei_consumo	Numeric	
Consumo em Km/litro.

ras_vei_velocidade_limite	Numeric	
Velocidade limite.

ras_vei_odometro	Numeric	
Odometro atual.

calculo_automatico	Numeric	
Calcula automaticamente odometro e horimetro 0 ou 1.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vei_id: "123456789"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Cliente incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Vehicles | Single
Busca um veículo pelo ID.

get
https://ws.fulltrack2.com/vehicles/single/id/:id
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vei_id: "6285",
              ras_vei_id_cli: "2728",
              ras_vei_placa: "LMU2720ib",
              ras_vei_veiculo: "2720 I-Button",
              ras_vei_chassi: "111111",
              ras_vei_ano: "111",
              ras_vei_cor: "111",
              ras_vei_tipo: "1",
              ras_vei_fabricante: "18",
              ras_vei_modelo: "111",
              ras_vei_combustivel: "2",
              ras_vei_consumo: "11111",
              ras_vei_velocidade_limite: "1111",
              ras_vei_odometro: "0",
              ras_vei_data_cadastro: "2013-09-10",
              ras_vei_data_ult_alt: "2015-10-14 13:17:07",
              ras_vei_equipamento: null
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Types
Busca a lista de tipos de rastreados.

get
https://ws.fulltrack2.com/vehicles/types
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_vtp_id: "1",
              ras_vtp_desc: "Carro"
          },
     1:  {
              ras_vtp_id: "2",
              ras_vtp_desc: "Moto"
          }

 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Vehicles | Update
Atualiza os dados do veículo na plataforma Fulltrack.

post
https://ws.fulltrack2.com/vehicles/update/id/:id
Parâmetro
Campo	Tipo	Descrição
ras_vei_placa	String	
Placa do veículo.

ras_vei_tag_identificacao	String	
Identificação do veículo (mapa).

ras_vei_veiculo	String	
Descrição do veículo.

ras_vei_chassi	String	
Número da chassi.

ras_vei_ano	Numeric	
Ano de fabricação do veículo.

ras_vei_cor	String	
Cor do veículo.

ras_vei_tipo	Numeric	
Tipo do veículo.

ras_vei_fabricante	Numeric	
Fabricante do veículo.

ras_vei_modelo	String	
Modelo do veículo.

ras_vei_combustivel	Numeric	
Combustível.

ras_vei_consumo	Numeric	
Consumo em Km/litro.

ras_vei_velocidade_limite	Numeric	
Velocidade limite.

ras_vei_odometro	Numeric	
Odometro atual.

ras_vei_horimetro	Numeric	
Horimetro atual.

calculo_automatico	Numeric	
Calcula automaticamente odometro e horimetro 0 ou 1.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successfully change!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Cliente incorreto):
HTTP/1.1 404 Not Found
{
     status: false
     message: "Error saving data!"
}
Vehicles Nearby
Vehicles Nearby | Near Point
Busca os veículos próximos a uma latitude e longitude, limitados por uma distância, em metros.

get
https://ws.fulltrack2.com/vehiclesnearby/nearpoint/id/:id/lat/:lat/long/:long/limit/:limit
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
             "ras_eve_aut_id": "6285",
             "loc": [
                 "-22.2154713",
                 "-49.6541367"
             ],
             "ras_eve_ignicao": "0",
             "ras_eve_velocidade": "1",
             "ras_eve_data_gps": "1447789592",
             "ras_eve_data_enviado": "1447789592",
             "ras_eve_data_servidor": "1448649793",
             "ras_vei_veiculo": "GOL",
             "ras_vei_placa": "AAA3615",
             "ras_vei_tipo": "1",
             "distancia": "0"
         }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Workingday
Workingday | Interval
Relatório de jornada dos motoristas

get
https://ws.fulltrack2.com/workingday/interval/initial/:initial/final/:final
Parâmetro
Campo	Tipo	Descrição
initial	String	
Unixtime inicial do período.

final	String	
Unixtime final do período.

client	Number	
Id referente ao cliente.

driver	Number	
Id referente ao motorista.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Workshop
Workshop | Install
Vincula um rastreado a um rastreador.

post
https://ws.fulltrack2.com/workshop/install
Parâmetro
Campo	Tipo	Descrição
ras_vei_id	Numeric	
Id do veículo.

ras_ras_id_aparelho	Hexadecimal	
Id do equipamento (Não é o id do Fulltrack).

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Veículo incorreto):
Resposta de Erro (Rastreador incorreto):
HTTP/1.1 404 Not Found
{
     status: false,
     message: "Fail!"
}
Workshop | List
Lista os rastreadores ativos.

get
https://ws.fulltrack2.com/workshop/list
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ins_id: "73066"
              ras_ras_id_aparelho: "4532003183"
              ras_vei_veiculo: "Saveiro"
              ras_vei_placa: "FSO0571"
              ras_cli_desc: "MARKA VEÍCULOS"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Workshop | Trackers
Lista os rastreadores disponíveis para vincular com um rastreado.

get
https://ws.fulltrack2.com/workshop/trackers
Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
     data: [1]
     0:  {
              ras_ras_id_aparelho: "550c123456"
              ras_prd_desc: "Niagara"
          }
 
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro:
HTTP/1.1 404 Not Found
{
     status: false
     message: "No data were found!"
}
Workshop | Uninstall
Desvincula um rastreado de um rastreador.

put
https://ws.fulltrack2.com/workshop/uninstall
Parâmetro
Campo	Tipo	Descrição
ras_ins_id	Numeric	
Id da Instalação.

Success 200
Campo	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

data	Array	
Dados de retorno.

Resposta de Sucesso:
HTTP/1.1 200 OK
{
     status: true
     message: "Successful!"
 }
Error 4xx
Nome	Tipo	Descrição
status	Boolean	
Status da requisição.

message	String	
Detalhe da requisição.

Resposta de Erro (Salvar):
Resposta de Erro (Instalação incorreta):
HTTP/1.1 404 Not Found
{
     status: false,
     message: "Fail!"
}
Fulltime

Gerado com apidoc 0.51.1 - Wed Jul 13 2022 18:47:06 GMT+0000 (Coordinated Universal Time)