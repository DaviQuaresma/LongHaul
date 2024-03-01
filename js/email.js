const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true para porta 465 e false para outras
    auth: {
        user: 'teste@gmail.com',
        pass: 'teste123'
    }
})

transport.sendMail({
        from: user,
        to: user,
        replyTo: "contato@programadorbr.com",
        subject: "Olá, Seja bem vindo",
        html: `
    <html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300;400;500;700&family=Arbutus+Slab&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Alegreya Sans SC', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        .container {
            width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333333;
        }

        p {
            color: #000000;
            line-height: 1.6;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Formulário de Contato</h1>
        <p>Recebemos uma nova mensagem de contato em nosso site da empresa LongHaul. Seguem os detalhes:</p>
        <p><strong>Nome do Cliente:</strong> ${data.nome}</p>
        <p><strong>E-mail do Cliente:</strong> ${data.email}</p>
        <p><strong>Mensagem do Cliente:</strong></p>
        <p>${data.message}</p>
        <p>Por favor, tome as medidas necessárias para responder a esta mensagem o mais rápido possível.</p>
        <p>Obrigado,</p>
        <p>Equipe LongHaul</p>
    </div>
</body>
</html>
    `
}).then(info=>{
        res.send(info)
}).catch(error => {
        res.send(error)
})

app.liste(port, () => console.log(`Running on port ${port}`))