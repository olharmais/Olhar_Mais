| table_name        | column_name                | data_type                   |
| ----------------- | -------------------------- | --------------------------- |
| aluno_dispositivo | id                         | integer                     |
| aluno_dispositivo | id_dispositivo             | integer                     |
| aluno_dispositivo | aluno                      | integer                     |
| aluno_dispositivo | escola                     | integer                     |
| aluno_dispositivo | id_do_aluno_no_dispositivo | text                        |
| aluno_dispositivo | numero_de_quem_cadastrou   | text                        |
| aluno_dispositivo | device_id                  | text                        |
| alunos            | id                         | integer                     |
| alunos            | nome_completo              | text                        |
| alunos            | registro_aluno             | text                        |
| alunos            | escola_id                  | integer                     |
| alunos            | foto_url                   | text                        |
| alunos            | genero                     | text                        |
| alunos            | data_nascimento            | date                        |
| alunos            | ultima_entrada             | timestamp with time zone    |
| alunos            | ultima_saida               | timestamp with time zone    |
| alunos            | soft_delete                | timestamp without time zone |
| alunos            | created_at                 | timestamp with time zone    |
| alunos            | updated_at                 | timestamp with time zone    |
| alunos            | status                     | status_aluno                |
| alunos            | turma                      | integer                     |
| alunos            | serie                      | integer                     |
| alunos            | contato1_whatsapp          | text                        |
| alunos            | contato2_whatsapp          | text                        |
| alunos2           | id                         | uuid                        |
| alunos2           | nome_aluno                 | text                        |
| alunos2           | ra_aluno                   | text                        |
| alunos2           | serie_aluno                | text                        |
| alunos2           | turma_aluno                | text                        |
| alunos2           | periodo_aluno_sistema      | text                        |
| alunos2           | data_nascimento            | text                        |
| alunos2           | nome_mae                   | text                        |
| alunos2           | telefone_mae               | text                        |
| alunos2           | nome_pai                   | text                        |
| alunos2           | telefone_pai               | text                        |
| alunos2           | created_at                 | timestamp with time zone    |
| alunos2           | escola_id                  | integer                     |
| alunos2           | id_aluno                   | integer                     |
| cameras           | id                         | integer                     |
| cameras           | cidade_id                  | integer                     |
| cameras           | escola_id                  | integer                     |
| cameras           | nome                       | text                        |
| cameras           | url                        | text                        |
| cameras           | tipo                       | text                        |
| cameras           | status                     | text                        |
| cameras           | soft_delete                | timestamp without time zone |
| cameras           | created_at                 | timestamp with time zone    |
| cameras           | updated_at                 | timestamp with time zone    |
| categorias        | id                         | integer                     |
| categorias        | nome                       | character varying(255)      |
| cidades           | id                         | integer                     |
| cidades           | brasao                     | text                        |
| cidades           | datas_de_recessos_feriados | text[]                      |
| cidades           | nome                       | text                        |
| cidades           | observacao                 | text                        |
| cidades           | recessos_feriados          | jsonb                       |
| cidades           | soft_delete                | timestamp without time zone |
| cidades           | status                     | status_cidade               |
| cidades           | uf                         | character(2)                |
| cidades           | videos_institucionais      | jsonb                       |
| cidades           | created_at                 | timestamp with time zone    |
| cidades           | updated_at                 | timestamp with time zone    |
| dispositivos      | id                         | bigint                      |
| dispositivos      | escola_id                  | integer                     |
| dispositivos      | camera_id                  | text                        |
| dispositivos      | ip                         | text                        |
| dispositivos      | soft_delete                | timestamp without time zone |
| dispositivos      | status                     | status_dispositivo          |
| dispositivos      | login                      | text                        |
| dispositivos      | senha                      | text                        |
| dispositivos      | created_at                 | timestamp with time zone    |
| dispositivos      | updated_at                 | timestamp with time zone    |
| dispositivos      | device_id                  | text                        |
| escolas           | id                         | integer                     |
| escolas           | cidade_id                  | integer                     |
| escolas           | nome                       | text                        |
| escolas           | endereco_logradouro        | text                        |
| escolas           | endereco_numero            | text                        |
| escolas           | endereco_bairro            | text                        |
| escolas           | endereco_cep               | text                        |
| escolas           | status                     | status_escola               |
| escolas           | soft_delete                | timestamp without time zone |
| escolas           | created_at                 | timestamp with time zone    |
| escolas           | updated_at                 | timestamp with time zone    |
| escolas           | estado                     | text                        |
| escolas           | categoria                  | integer                     |
| escolas           | endereco_complemento       | text                        |
| escolas           | telefone                   | text                        |
| logs              | id                         | bigint                      |
| logs              | time                       | bigint                      |
| logs              | event                      | smallint                    |
| logs              | device_id                  | bigint                      |
| logs              | identifier_id              | bigint                      |
| logs              | user_id                    | bigint                      |
| logs              | portal_id                  | bigint                      |
| logs              | identification_rule_id     | bigint                      |
| logs              | card_value                 | text                        |
| logs              | qrcode_value               | text                        |
| logs              | pin_value                  | text                        |
| logs              | confidence                 | text                        |
| logs              | mask                       | text                        |
| logs              | log_type_id                | smallint                    |
| logs              | inserted_at                | timestamp with time zone    |
| logs              | internal_id                | text                        |
| notificacoes      | id                         | integer                     |
| notificacoes      | cidade_id                  | integer                     |
| notificacoes      | titulo                     | character varying(255)      |
| notificacoes      | descricao                  | text                        |
| notificacoes      | imagem_url                 | text                        |
| notificacoes      | video_url                  | text                        |
| notificacoes      | created_at                 | timestamp with time zone    |
| notificacoes      | updated_at                 | timestamp with time zone    |
| notificacoes      | video_file_url             | text                        |
| notificacoes      | tipo_midia                 | text                        |
| notificacoes      | views_storys               | bigint                      |
| permissoes_aluno  | id                         | integer                     |
| permissoes_aluno  | usuario_id                 | uuid                        |
| permissoes_aluno  | aluno_id                   | integer                     |
| permissoes_aluno  | created_at                 | timestamp with time zone    |
| permissoes_cidade | id                         | integer                     |
| permissoes_cidade | usuario_id                 | uuid                        |
| permissoes_cidade | cidade_id                  | integer                     |
| permissoes_cidade | created_at                 | timestamp with time zone    |
| permissoes_escola | id                         | integer                     |
| permissoes_escola | usuario_id                 | uuid                        |
| permissoes_escola | escola_id                  | integer                     |
| permissoes_escola | created_at                 | timestamp with time zone    |
| permissoes_serie  | id                         | integer                     |
| permissoes_serie  | usuario_id                 | uuid                        |
| permissoes_serie  | serie_id                   | integer                     |
| permissoes_serie  | created_at                 | timestamp with time zone    |
| permissoes_turma  | id                         | integer                     |
| permissoes_turma  | usuario_id                 | uuid                        |
| permissoes_turma  | turma_id                   | integer                     |
| permissoes_turma  | created_at                 | timestamp with time zone    |
| series            | id                         | integer                     |
| series            | escola_id                  | integer                     |
| series            | nome                       | text                        |
| series            | status                     | character varying(20)       |
| series            | categoria_id               | integer                     |
| series            | soft_delete                | timestamp without time zone |
| series            | created_at                 | timestamp with time zone    |
| series            | updated_at                 | timestamp with time zone    |
| series            | created_by                 | uuid                        |
| series            | modified_by                | uuid                        |
| turmas            | id                         | integer                     |
| turmas            | escola_id                  | integer                     |
| turmas            | serie_id                   | integer                     |
| turmas            | nome                       | text                        |
| turmas            | observacoes                | text                        |
| turmas            | periodo                    | periodo_turma               |
| turmas            | status                     | status_turma                |
| turmas            | soft_delete                | timestamp without time zone |
| turmas            | created_at                 | timestamp with time zone    |
| turmas            | updated_at                 | timestamp with time zone    |
| usuarios          | id                         | uuid                        |
| usuarios          | nome                       | text                        |
| usuarios          | sobrenome                  | text                        |
| usuarios          | tipo                       | tipo_usuario                |
| usuarios          | whatsapp                   | text                        |
| usuarios          | ultimo_log                 | timestamp with time zone    |
| usuarios          | hash1                      | text                        |
| usuarios          | hash2                      | text                        |
| usuarios          | foto_url                   | text                        |
| usuarios          | created_at                 | timestamp with time zone    |
| usuarios          | updated_at                 | timestamp with time zone    |
| usuarios          | status                     | status_usuario              |
| usuarios          | aluno                      | integer                     |
| usuarios          | cidade                     | integer                     |
| usuarios          | genero                     | text                        |





| view_name                | column_name                | data_type                |
| ------------------------ | -------------------------- | ------------------------ |
| dias_com_logs            | data                       | date                     |
| dias_com_logs            | turma_id                   | integer                  |
| dias_com_logs            | serie_id                   | integer                  |
| dias_com_logs            | escola_nome                | text                     |
| dias_com_logs            | cidade_nome                | text                     |
| dias_com_logs            | qtd_logs                   | bigint                   |
| dias_com_logs            | total_alunos               | bigint                   |
| view_alunos_criticos     | aluno_id                   | integer                  |
| view_alunos_criticos     | aluno_nome                 | text                     |
| view_alunos_criticos     | aluno_foto                 | text                     |
| view_alunos_criticos     | escola_id                  | integer                  |
| view_alunos_criticos     | escola_nome                | text                     |
| view_alunos_criticos     | turma_nome                 | text                     |
| view_alunos_criticos     | serie_nome                 | text                     |
| view_alunos_criticos     | dias_presentes             | bigint                   |
| view_alunos_criticos     | dias_letivos               | integer                  |
| view_alunos_criticos     | percentual_presenca        | numeric                  |
| view_alunos_logs         | log_id                     | bigint                   |
| view_alunos_logs         | device_id                  | bigint                   |
| view_alunos_logs         | id_do_aluno_no_dispositivo | bigint                   |
| view_alunos_logs         | nome_aluno                 | text                     |
| view_alunos_logs         | foto_aluno                 | text                     |
| view_alunos_logs         | hora_check                 | timestamp with time zone |
| view_alunos_logs         | serie                      | integer                  |
| view_alunos_logs         | turma_nome                 | text                     |
| view_alunos_logs         | turma                      | text                     |
| view_alunos_logs         | nome_colégio               | text                     |
| view_alunos_logs         | cidade                     | text                     |
| view_distribuicao_series | escola_id                  | integer                  |
| view_distribuicao_series | cidade_id                  | integer                  |
| view_distribuicao_series | serie_id                   | integer                  |
| view_distribuicao_series | serie_nome                 | text                     |
| view_distribuicao_series | total_alunos               | bigint                   |
| view_distribuicao_series | presentes_hoje             | bigint                   |
| view_escolas_resumo      | escola_id                  | integer                  |
| view_escolas_resumo      | escola_nome                | text                     |
| view_escolas_resumo      | cidade_id                  | integer                  |
| view_escolas_resumo      | cidade_nome                | text                     |
| view_escolas_resumo      | total_turmas               | bigint                   |
| view_escolas_resumo      | total_alunos               | bigint                   |
| view_escolas_resumo      | presentes_hoje             | bigint                   |
| view_escolas_resumo      | percentual_presenca        | numeric                  |
| view_historico_presenca  | data                       | date                     |
| view_historico_presenca  | cidade_id                  | integer                  |
| view_historico_presenca  | total_presentes            | bigint                   |
| view_historico_presenca  | total_alunos               | bigint                   |
| view_historico_presenca  | percentual_presenca        | numeric                  |
| view_logs_com_detalhes   | device_id                  | bigint                   |
| view_logs_com_detalhes   | nome_aluno                 | text                     |
| view_logs_com_detalhes   | foto_aluno                 | text                     |
| view_logs_com_detalhes   | hora_check                 | timestamp with time zone |
| view_logs_com_detalhes   | serie                      | integer                  |
| view_logs_com_detalhes   | turma_nome                 | integer                  |
| view_logs_com_detalhes   | nome_colegio               | text                     |
| view_logs_com_detalhes   | cidade                     | integer                  |
| view_logs_recentes       | log_id                     | bigint                   |
| view_logs_recentes       | horario                    | timestamp with time zone |
| view_logs_recentes       | aluno_id                   | integer                  |
| view_logs_recentes       | aluno_nome                 | text                     |
| view_logs_recentes       | aluno_foto                 | text                     |
| view_logs_recentes       | escola_id                  | integer                  |
| view_logs_recentes       | escola_nome                | text                     |
| view_logs_recentes       | cidade_id                  | integer                  |
| view_logs_recentes       | tipo_evento                | text                     |
| view_metricas_cidade     | cidade_id                  | integer                  |
| view_metricas_cidade     | cidade_nome                | text                     |
| view_metricas_cidade     | cidade_brasao              | text                     |
| view_metricas_cidade     | total_escolas              | bigint                   |
| view_metricas_cidade     | total_turmas               | bigint                   |
| view_metricas_cidade     | total_alunos               | bigint                   |
| view_metricas_cidade     | presentes_hoje             | bigint                   |
| view_permissoes_aluno    | id                         | integer                  |
| view_permissoes_aluno    | usuario_id                 | uuid                     |
| view_permissoes_aluno    | aluno_id                   | integer                  |
| view_permissoes_aluno    | nome_aluno                 | text                     |
| view_permissoes_aluno    | foto_aluno                 | text                     |
| view_permissoes_aluno    | registro_aluno             | text                     |
| view_permissoes_aluno    | escola_id                  | integer                  |
| view_permissoes_aluno    | nome_escola                | text                     |
| view_permissoes_aluno    | created_at                 | timestamp with time zone |