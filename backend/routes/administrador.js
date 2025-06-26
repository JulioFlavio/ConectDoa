const express = require('express');
const router = express.Router();
const db = require('../database/connection');

// GET - Administradores
router.get('/', (req, res) => {
  const sql = "SELECT * FROM Administrador";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Erro ao buscar Administradores: ", err);
      res.status(500).json({ error: 'Erro ao listar empresas'});
    } else {
      res.json(result);
    }
  })
});

// POST - Cadastrar Admin
router.post('/', (req, res) => {
  const sql = "INSERT INTO Administrador (IDAdmin, Nome, Email, Senha) VALUES (?, ?, ?, ?)";
  const {IDAdmin, Nome, Email, Senha} = req.body;
  const values = [IDAdmin, Nome, Email, Senha]

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Erro ao Inserir ADM: ", err);
      res.status(500).json("Erro ao inserir.");
    } else {
      res.status(201).json({ message: 'Administrador registrado com sucesso!'});
    }
  })
})

module.exports = router;