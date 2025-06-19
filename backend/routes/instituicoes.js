const express = require('express');
const router = express.Router();
const instituicaoController = require('../controllers/instituicaoController');

// Rota para listar instituições
router.get('/', instituicaoController.listarInstituicoes);

// Rota para cadastrar instituição
router.post('/', instituicaoController.criarInstituicao);

module.exports = router;
