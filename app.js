const express = require('express');
const lessMiddleware = require('less-middleware');
const path = require('path');

const app = express();

// Configurando o middleware para compilar os arquivos LESS
app.use(lessMiddleware(path.join(__dirname, 'public')));

// Definindo a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    //res.render('/views/index.html');
    res.sendFile(path.join(__dirname, 'views', 'exercicio01.html'));
});

app.get('/exercicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'exercicio01.html'));
})

app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'historia.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
})

// Iniciando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
