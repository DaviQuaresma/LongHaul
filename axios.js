const axios = require('axios');

axios.post('https://victors-page-api.onrender.com/sendMail', {
  nome: 'Seu Nome',
  email: 'seu.email@example.com',
  assunto: 'Assunto da Mensagem',
  mensagem: 'Conteúdo da mensagem.'
})
.then(function (response) {
  console.log('Resposta da API:', response.data);
})
.catch(function (error) {
  console.error('Erro na requisição:', error);
});
