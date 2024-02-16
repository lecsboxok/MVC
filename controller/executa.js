const express = require('express')
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { raio, altura } = req.body
    const volume = Calculadora.Volume(parseFloat(raio), parseFloat(altura));
    res.redirect(`/resultado.html?volume=${volume}`);
    // res.send(`O volume é: ${volume}`);
});

module.exports = resultado;