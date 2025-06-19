# 📦 Projeto ConectDoa – Back-End + Banco de Dados

Este é um projeto de estudos que simula uma plataforma de doações. A proposta é desenvolver o **back-end** e o **banco de dados** a partir de um front-end já existente.

---

## 📚 1. COMO FAZER (Teoria)

### 1.1. O que é back-end?
Back-end é a parte "invisível" de um sistema. Ele:
- Recebe as requisições do front-end (como: "listar doações")
- Acessa o banco de dados
- Devolve a resposta (como uma lista em JSON)

### 1.2. O que é banco de dados?
É onde ficam armazenadas as informações:
- Nome das instituições
- Doações feitas
- Usuários cadastrados

### 1.3. O que são rotas?
Rotas são caminhos que o back-end usa para organizar funcionalidades.

Exemplo:  
`GET /instituicoes` → rota que lista instituições  
`POST /doacoes` → rota que salva uma nova doação

---

## ⚙️ 2. AMBIENTE USADO

- Windows 10 (Desktop)
- MySQL Workbench (para criar e gerenciar banco de dados)
- XAMPP (com servidor MySQL ativado)
- Node.js + npm
- Postman (para testar a API)

---

## 🧱 3. ESTRUTURA DE PASTAS

backend/ <br>
├── index.js # Arquivo principal do servidor <br>
├── database/ <br>
│ └── connection.js # Conexão com o banco de dados <br>
└── routes/ <br>
│ └── instituicoes.js # Rotas para instituições <br>
│ └── doacoes.js # Rotas para doações <br>
│ └── usuarios.js # Rotas para usuários <br>

---

## 🧑‍💻 4. CONTEÚDO DOS ARQUIVOS

### 4.1. `database/connection.js`

```js
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SEU_USUARIO',
    password: 'SUA_SENHA',
    database: 'conectdoa'
    });

    connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao banco!');
    });

    module.exports = connection;

```

### 4.2. `index.js`

```js

    const express = require('express');
    const cors = require('cors');
    const app = express();

    const instituicoesRoutes = require('./routes/instituicoes');
    const doacoesRoutes = require('./routes/doacoes');
    const usuariosRoutes = require('./routes/usuarios');

    app.use(cors());
    app.use(express.json());

    app.use('/instituicoes', instituicoesRoutes);
    app.use('/doacoes', doacoesRoutes);
    app.use('/usuarios', usuariosRoutes);

    app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    });


```

### 4.3. `routes/instituicoes.js`

```js

    const express = require('express');
    const router = express.Router();
    const db = require('../database/connection');

    router.get('/', (req, res) => {
    const sql = 'SELECT * FROM instituicao';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        res.json(results);
    });
    });

    router.post('/', (req, res) => {
    const { nome, endereco, telefone, email } = req.body;
    const sql = 'INSERT INTO instituicao (nome, endereco, telefone, email) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, endereco, telefone, email], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        res.status(201).json({ message: 'Instituição cadastrada' });
    });
    });

    module.exports = router;


```

### 4.4. `routes/doeacoes.js`

```js

    const express = require('express');
    const router = express.Router();
    const db = require('../database/connection');

    router.get('/', (req, res) => {
    const sql = `
        SELECT d.id, d.tipo, d.quantidade, d.data_doacao, i.nome AS nome_instituicao
        FROM doacao d
        JOIN instituicao i ON d.id_instituicao = i.id
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        res.json(results);
    });
    });

    router.post('/', (req, res) => {
    const { id_instituicao, tipo, quantidade, data_doacao } = req.body;
    const sql = 'INSERT INTO doacao (id_instituicao, tipo, quantidade, data_doacao) VALUES (?, ?, ?, ?)';
    db.query(sql, [id_instituicao, tipo, quantidade, data_doacao], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        res.status(201).json({ message: 'Doação cadastrada' });
    });
    });

    module.exports = router;


```

### 4.5. `routes/usuarios.js`

```js

    const express = require('express');
    const router = express.Router();
    const db = require('../database/connection');

    router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        res.status(201).json({ message: 'Usuário cadastrado' });
    });
    });

    router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, results) => {
        if (err) return res.status(500).json({ error: 'Erro' });
        if (results.length > 0) {
        res.json({ message: 'Login OK', usuario: results[0] });
        } else {
        res.status(401).json({ message: 'Email ou senha inválidos' });
        }
    });
    });

    module.exports = router;


```


## 💻 5. MIGRAR PARA OUTRO COMPUTADOR (Ubuntu Linux)
### 5.1. Teoria
Você precisa transferir três coisas:

 - O código do back-end
 - O banco de dados (estrutura + dados)
 - Instalar os mesmos programas no Linux

### 5.2. Passos técnicos
✅ No computador atual (Windows):
 - Copie a pasta backend/
 - Exporte o banco de dados pelo MySQL Workbench:
 - Clique com botão direito no banco → Export Database
 - Escolha salvar como .sql

✅ No Ubuntu:
- Instale Node.js:
```bash
    sudo apt update
    sudo apt install nodejs npm
```
- Instale MySQL:

```bash
    sudo apt install mysql-server
    sudo mysql_secure_installation
```
- Abra o MySQL:
```bash
    sudo mysql -u root -p
```
 - Crie um novo banco:

```sql
    CREATE DATABASE conectdoa;
```
- Importe o .sql:

```bash
    mysql -u root -p conectdoa < caminho/para/seu_arquivo.sql
```
 - Instale as dependências:

```bash
    cd backend/
    npm install
```
- Rode o servidor:

```bash
    node index.js
```


## Agora você tem todos os `README.md` organizados por **etapas de aprendizado**:

| Etapa | Nome do README          | Conteúdo Principal                        |
|-------|-------------------------|-------------------------------------------|
| 1     | `README_BD.md`          | Criação do banco de dados MySQL           |
| 2     | `README_BACKEND_INIT.md`| Início do servidor Express e conexão MySQL|
| 3     | `README_INSTITUICOES.md`| Rotas da instituição                      |
| 4     | `README_DOACOES.md`     | Rotas de doações com JOIN                 |
| 5     | `README_USUARIOS.md`    | Cadastro e login de usuários              |
| FINAL | `README.md`             | Projeto completo, migrável para Linux     |