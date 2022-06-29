
export async function get({ params }) {
  // `params.id` comes from [id].js
  const dados = [{
    "cd_identificacao_job": 1,
    "ds_finalidade_job": "Incrementar a data de processamento",
    "st_reprocessamento": 2,
    "nm_job_processamento": "BATCH001  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 2,
    "ds_finalidade_job": "Carregar o arquivo Diário de Transações Monetárias da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH002  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 3,
    "ds_finalidade_job": "Carregar o arquivo Saldo Contas da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH003  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 4,
    "ds_finalidade_job": "Carregar o arquivo Mensal Microfichas para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH004  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 6,
    "ds_finalidade_job": "Carregar o arquivo Transações Contábeis da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH006  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 7,
    "ds_finalidade_job": "Carregar o arquivo Cadastro Positivo da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH007  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 8,
    "ds_finalidade_job": "De-Para do arquivo Cadastro Positivo da CSU para padrão Banese",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH008  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 9,
    "ds_finalidade_job": "Gerar XML do arquivo Cadastro Positivo (Dados Cadastrais) padrão Banese",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH009  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 10,
    "ds_finalidade_job": "Gerar XML do arquivo Cadastro Positivo (Contrato) padrão Banese",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH010  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 11,
    "ds_finalidade_job": "Carregar o arquivo DECRED da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH011  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 12,
    "ds_finalidade_job": "De-Para do arquivo DECRED da CSU para padrão Banese",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH012  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 13,
    "ds_finalidade_job": "Carregar o arquivo CADOC 3040 da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH013  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 14,
    "ds_finalidade_job": "De-Para do arquivo CADOC 3040 da CSU para padrão Banese (PDCase)",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH014  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 16,
    "ds_finalidade_job": "Carregar o arquivo CADOC 3050 da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH016  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 17,
    "ds_finalidade_job": "Gerar CADOC 3040 da CSU para padrão Banese (PDCase)",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH017  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 18,
    "ds_finalidade_job": "De-Para do arquivo CADOC 3050 da CSU para padrão Banese (PDCase)",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH018  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 19,
    "ds_finalidade_job": "Gerar CADOC 3050 da CSU para padrão Banese (PDCase)",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH019  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 20,
    "ds_finalidade_job": "Carregar o arquivo Trimestral BACEN Concemis da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH020  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 21,
    "ds_finalidade_job": "Carregar o arquivo Trimestral BACEN Lucremis da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH021  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 22,
    "ds_finalidade_job": "Carregar o arquivo Trimestral BACEN Portador da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH022  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 23,
    "ds_finalidade_job": "Carregar o arquivo Trimestral BACEN Contatos da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH023  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 24,
    "ds_finalidade_job": "Carregar o arquivo Trimestral BACEN Emissor da CSU para base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH024  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 25,
    "ds_finalidade_job": "De-Para do arquivo Cadoc3040 padrão SEAC para Central de Risco padrão Banese",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH025  ",
    "nm_jobset_processamento": "PCARD01   "
  },
  {
    "cd_identificacao_job": 26,
    "ds_finalidade_job": "Carregar o arquivo Liquidação Crédito da ELO para a base de dados",
    "st_reprocessamento": 3,
    "nm_job_processamento": "BATCH026  ",
    "nm_jobset_processamento": "PCARD01   "
  }];
 
  if (dados) {
    return {
      body: { dados }
    };
  }
 
  return {
    status: 404
  };
}