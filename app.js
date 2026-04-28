const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Esta es una respuesta sencilla')
});


//http://localhost:3000/suma?a=4&b=7

app.get('/suma', (req, res) => {
    const {a, b} = req.query;
    const resultado = Number(a) + Number(b);
    res.json("resultado"+{resultado});
});

module.exports = app;