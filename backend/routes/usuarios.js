const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// GET - Listar Usuarios
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM Usuarios';
  db.query(sql, (err, result) => {
    if (err) {
      console.log('Erro ao listar usuarios: ', err);
    } else {
      res.status(201).json(result)
    }
  })
})

// POST - Cadastro de usuário
router.post('/cadastro', (req, res) => {
  const {CPF, Nome, Idade, NomeUsuario, Email, Senha, Endereco} = req.body;

  const sql = 'INSERT INTO Usuarios (CPF, Nome, Idade, NomeUsuario, Email, Senha, Endereco) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [CPF, Nome, Idade, NomeUsuario, Email, Senha, Endereco];

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
  const { Email, Senha } = req.body;

  const sql = 'SELECT * FROM Usuarios WHERE Email = ? AND Senha = ?';
  const values = [Email, Senha];

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
