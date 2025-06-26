const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// GET - Listar todas as doações
router.get('/', (req, res) => {
  const sql = `
    SELECT d.IDDoacao, d.DataDoacao, d.Descricao, d.Status,
           u.Nome AS nome_usuario,
           e.Nome AS nome_empresa
    FROM Doacoes d
    LEFT JOIN Usuarios u ON d.fk_Usuarios_IDUsuario = u.IDUsuario
    LEFT JOIN Empresas e ON d.fk_Empresas_IDEmpresa = e.IDEmpresa
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
  const { IDDoacao, DataDoacao, Descricao, Status, fk_Empresas_IDEmpresa, fk_Usuarios_IDUsuario } = req.body;

  const sql = `
    INSERT INTO Doacoes (IDDoacao, DataDoacao, Descricao, Status, fk_Empresas_IDEmpresa, fk_Usuarios_IDUsuario)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [IDDoacao, DataDoacao, Descricao, Status, fk_Empresas_IDEmpresa, fk_Usuarios_IDUsuario];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao inserir doação:', err);
      res.status(500).json({ error: 'Erro ao inserir doação' });
    } else {
      res.status(201).json({ message: 'Doação registrada com sucesso!', doacao: result[0] });
    }
  });
});

module.exports = router;
