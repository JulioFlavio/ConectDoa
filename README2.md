# 📘 ConectDoa - Documentação do Projeto
🧠 Parte Teórica
🔧 Como funciona um servidor Node.js
Um servidor Node.js é uma aplicação JavaScript que roda no back-end. Ele é responsável por:

Receber requisições do cliente (navegador, app, etc)

Processar os dados

Acessar e manipular o banco de dados

Retornar respostas ao front-end

Utilizamos o framework Express.js, que facilita a criação de rotas e o gerenciamento das requisições HTTP.

🗂 Conceito de rotas e API REST
Cada rota representa uma "porta de entrada" da aplicação para determinada ação. Exemplos:

POST /usuarios: cadastrar um novo usuário

GET /instituicoes: listar instituições

Esse conjunto de rotas forma a API REST, que pode ser consumida por qualquer front-end.

🛢 Conexão com o Banco de Dados
Usamos o MySQL como banco relacional, e a biblioteca mysql2 para conectar o Node.js ao banco.
A conexão permite:

Inserir dados (INSERT)

Buscar dados (SELECT)

Atualizar e deletar (UPDATE/DELETE)

🔄 Integração entre Front-end e Back-end
O front-end (HTML, JS) envia dados para a API via requisições HTTP usando fetch().
O back-end recebe, processa e responde com sucesso ou erro, geralmente em formato JSON.

🛠 Parte Prática
📁 Estrutura de Pastas (resumida)
ConectDoa/
├── backend/
│ ├── controllers/ → Lógica das requisições
│ ├── database/ → Conexão com o MySQL
│ ├── routes/ → Arquivos de rota: usuarios.js, doacoes.js, instituicoes.js
│ └── server.js → Arquivo principal do servidor
├── frontend/ → (fornecido previamente)

🔌 Banco de Dados
Três tabelas principais foram criadas:

Tabela usuarios:

id (INT, AUTO_INCREMENT, PRIMARY KEY)

nome (VARCHAR 100)

email (VARCHAR 100)

telefone (VARCHAR 20)

endereco (VARCHAR 150)

Tabela instituicao:

id (INT, AUTO_INCREMENT, PRIMARY KEY)

nome (VARCHAR 100)

endereco (VARCHAR 150)

telefone (VARCHAR 20)

email (VARCHAR 100)

Tabela doacao:

id (INT, AUTO_INCREMENT, PRIMARY KEY)

id_instituicao (INT, FOREIGN KEY)

tipo (VARCHAR 50)

quantidade (INT)

data_doacao (DATE)

🚀 Execução Local (Linux e Windows)
Clonar o repositório:

git clone <URL_DO_REPOSITORIO>

Entrar na pasta do back-end:

cd backend

Instalar as dependências:

npm install

Subir o servidor:

node server.js

Servidor estará rodando em http://localhost:3000

📬 Testes com o Postman
Foram feitos testes de cadastro, consulta e integração via POST e GET com as rotas:

/usuarios

/instituicoes

/doacoes

🌐 Integração com Front-end
No formulário de cadastro de usuários (HTML + JS):

O script coleta os dados do formulário

Envia via fetch() com POST para /usuarios

Recebe resposta de sucesso ou erro do back-end

Esse processo foi testado e está funcionando corretamente.