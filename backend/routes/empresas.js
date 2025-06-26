const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// GET - Empresas
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM Empresas';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao listar empresas:', err);
      res.status(500).json({ error: 'Erro listar empresas' });
    } else {
      res.json(result);
    }
  });
});

// POST - Cadastro de empresas
router.post('/', (req, res) => {
  const { IDEmpresa, CNPJ, Nome, Email, Telefone, Descricao, fk_Administrador_IDAdmin } = req.body;

  const sql = 'INSERT INTO Empresas VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [IDEmpresa, CNPJ, Nome, Email, Telefone, Descricao, fk_Administrador_IDAdmin];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao cadastrar empresa:', err);
      res.status(500).json({ error: 'Erro ao cadastrar a empresa' });
    } else {
      res.status(201).json({ message: 'Empresa cadastrada com sucesso!'});
    }
  });
});

module.exports = router;
