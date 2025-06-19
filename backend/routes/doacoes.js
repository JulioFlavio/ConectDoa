const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// GET - Listar todas as doações
router.get('/', (req, res) => {
  const sql = `
    SELECT d.id, d.tipo, d.quantidade, d.data_doacao, i.nome AS nome_instituicao
    FROM doacao d
    JOIN instituicao i ON d.id_instituicao = i.id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar doações:', err);
      res.status(500).json({ error: 'Erro ao buscar doações' });
    } else {
      res.json(results);
    }
  });
});

// POST - Criar nova doação
router.post('/', (req, res) => {
  const { id_instituicao, tipo, quantidade, data_doacao } = req.body;

  const sql = 'INSERT INTO doacao (id_instituicao, tipo, quantidade, data_doacao) VALUES (?, ?, ?, ?)';
  const values = [id_instituicao, tipo, quantidade, data_doacao];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir doação:', err);
      res.status(500).json({ error: 'Erro ao inserir doação' });
    } else {
      res.status(201).json({ message: 'Doação cadastrada com sucesso!', id: result.insertId });
    }
  });
});

module.exports = router;
