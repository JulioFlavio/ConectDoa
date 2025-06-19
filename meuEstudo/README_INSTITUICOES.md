# 📌 ConectDoa – Etapa 3: Rotas de Instituições

Nesta etapa, criamos as primeiras rotas usando o **Express** para interagir com a tabela `instituicao`.  
Essas rotas permitem **listar todas as instituições** e **cadastrar uma nova instituição**.


## 📁 Estrutura Atualizada

backend/ <br>
├── index.js <br>
├── database/ <br>
│ └── connection.js <br>
└── routes/ <br>
│ └── instituicoes.js <br>


## 📂 Arquivo: routes/instituicoes.js

```js
    const express = require('express');
    const router = express.Router();
    const db = require('../database/connection');

    // Rota para listar instituições
    router.get('/', (req, res) => {
    const sql = 'SELECT * FROM instituicao';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao buscar instituições' });
        res.json(results);
    });
    });

    // Rota para cadastrar instituição
    router.post('/', (req, res) => {
    const { nome, endereco, telefone, email } = req.body;
    const sql = 'INSERT INTO instituicao (nome, endereco, telefone, email) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, endereco, telefone, email], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao cadastrar' });
        res.status(201).json({ message: 'Instituição cadastrada com sucesso!' });
    });
    });

    module.exports = router;
```

## 🧠 O que está acontecendo aqui:
- `express.Router()` cria um mini-app com rotas separadas.
- `router.get('/')` pega todas as instituições.
- `router.post('/')` insere uma nova instituição no banco.
- `db.query(...)` executa comandos SQL com o banco de dados.

## 🔗 Ligando essa rota ao servidor (index.js)

No seu arquivo index.js, adicione:
```js
    const instituicoesRoutes = require('./routes/instituicoes');
    app.use('/instituicoes', instituicoesRoutes);
```
Com isso, ao acessar /instituicoes no navegador ou Postman, a API saberá qual código executar.

## ✅ Testes com o Postman
`GET http://localhost:3000/instituicoes` → lista todas as instituições

`POST http://localhost:3000/instituicoes` com body JSON:

```json
    {
        "nome": "Instituto Esperança",
        "endereco": "Rua Exemplo, 123",
        "telefone": "11999999999",
        "email": "contato@esperanca.org"
    }
```

