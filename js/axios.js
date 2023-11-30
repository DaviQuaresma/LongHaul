//AXIOS é uma lib para testar envio de eventos HTTP assim como POSTMAN ou INSOMNIA por exemplo


/*Desativar a Verificação de Certificado para teste (Não Recomendado para Produção): */

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const axios = require('axios');

axios.post('https://victors-page-api.onrender.com/sendMail', {
  Nome: 'Seu Nome',
  Email: 'seu.email@example.com',
  Assunto: 'Assunto da Mensagem',
  Mensagem: 'Conteúdo da mensagem.'
})
.then(function (response) {
  console.log('Resposta da API:', response.data);
})
.catch(function (error) {
  console.error('Erro na requisição:', error);
});
