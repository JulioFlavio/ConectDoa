const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// POST - Cadastro de usuário
router.post('/cadastro', (req, res) => {
  const { nome, email, senha, nomeUsuario, idade, cpf } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha, nomeUsuario, idade, cpf) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nome, email, senha, nomeUsuario, idade, cpf];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    } else {
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: result.insertId });
    }
  });
});

// POST - Login de usuário
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  const values = [email, senha];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao fazer login:', err);
      res.status(500).json({ error: 'Erro ao fazer login' });
    } else if (results.length > 0) {
      res.status(200).json({ message: 'Login bem-sucedido', usuario: results[0] });
    } else {
      res.status(401).json({ message: 'Email ou senha incorretos' });
    }
  });
});

module.exports = router;
