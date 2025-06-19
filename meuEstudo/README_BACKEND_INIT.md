# 📌 ConectDoa – Etapa 2: Início do Back-End

Nesta etapa, iniciamos o desenvolvimento do back-end da aplicação utilizando **Node.js** com o framework **Express**.

---

## 🧰 Tecnologias Utilizadas

- **Node.js** – Ambiente para executar JavaScript fora do navegador
- **Express** – Framework web para Node.js
- **MySQL2** – Biblioteca para conectar com o MySQL
- **Cors** – Middleware para permitir conexões externas (como do front-end)
- **Postman** – Ferramenta para testar rotas da API


## 📁 Estrutura Inicial de Pastas

backend/ <br>
├── index.js <br>
├── database/ <br>
│ └── connection.js <br>



## 🔌 Conexão com o Banco

Criamos o arquivo `database/connection.js`, responsável por se conectar com o banco de dados:

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

## 🧠 O que significa:
- `require('mysql2')` importa a biblioteca MySQL2.
- `mysql.createConnection({...})` cria uma conexão com o banco.
- `connection.connect(...)` tenta se conectar ao banco e exibe se foi bem-sucedido.
- `module.exports` = connection exporta a conexão para que possa ser usada em outros arquivos.


## 🚀 Servidor Inicial
Criamos o arquivo index.js, que inicializa o servidor:

```js

    const express = require('express');
    const cors = require('cors');
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    });

```

## 🧠 O que isso faz:
- `express()` cria um app Express.
- `app.use(cors())` permite requisições externas (como do front-end).
- `app.use(express.json())` permite que o servidor receba dados em JSON.
- `app.listen(3000)` inicia o servidor na porta 3000.