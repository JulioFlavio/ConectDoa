# 📌 ConectDoa – Etapa 5: Cadastro e Login de Usuários

Nesta etapa, foram criadas rotas para:

- 📥 Cadastrar usuários
- 🔐 Realizar login (de forma simples, sem autenticação avançada ainda)

Essas rotas utilizam a tabela `usuario`, criada anteriormente no banco de dados.

---

## 📁 Estrutura Atualizada

backend/
├── index.js <br>
├── database/ <br>
│ └── connection.js <br>
└── routes/ <br>
├── instituicoes.js <br>
├── doacoes.js <Br>
└── usuarios.js <Br>


---

## 📂 Arquivo: routes/usuarios.js

```js
    const express = require('express');
    const router = express.Router();
    const db = require('../database/connection');

    // Cadastro de novo usuário
    router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    });
    });

    // Login de usuário
    router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro ao fazer login' });
        if (results.length > 0) {
        res.status(200).json({ message: 'Login realizado com sucesso!', usuario: results[0] });
        } else {
        res.status(401).json({ message: 'Email ou senha inválidos' });
        }
    });
    });

    module.exports = router;
```

## 🧠 O que está acontecendo aqui:
- `router.post('/cadastro')`: Insere um novo usuário no banco.
- `router.post('/login')`: Verifica se o email e senha existem no banco e retorna os dados do usuário.
- Atenção: Senhas estão sendo armazenadas em texto puro (sem criptografia) – isso será melhorado futuramente.

## 🔗 Ligando essa rota ao servidor (index.js)
No arquivo index.js, adicione:
```js
    const usuariosRoutes = require('./routes/usuarios');
    app.use('/usuarios', usuariosRoutes);
```
## ✅ Testes com o Postman
### 🔹 POST `/usuarios/cadastro`
Body JSON de exemplo:

```json
    {
        "nome": "João Silva",
        "email": "joao@email.com",
        "senha": "123456"
    }
```
### 🔹 POST `/usuarios/login`
```json
    {
        "email": "joao@email.com",
        "senha": "123456"
    }
```