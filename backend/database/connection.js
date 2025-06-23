// Aqui, usamos a biblioteca mysql2 para conectar no banco de dados da ConectDoa.
// createConnection recebe os dados de acesso, e connect() tenta se conectar.
// No final, exportamos isso para usar nas rotas.
const mysql = require('mysql2');


// Aqui você coloca suas credenciais do banco de dados de acordo com o banco que foi criado.
// Eu por exemplo usei MySQL Workbench e XAMP no Windows e criei o banco do projeto localmente essas informações
const connection = mysql.createConnection({
    host: 'localhost',     // O servidor do banco (localhost = seu computador)
    user: 'root',          // Usuário do MySQL (geralmente é 'root')
    password: 'Jj300804**',          // Sua senha do banco 
    database: 'conectDoa'  // O nome do banco que você criou
});



// Aqui o servidor tenta fazer a conexão com o banco de dados, ele exibe a mensagem de erro caso não consiga conectar
// ou a mensagem que conseguiu conectar.
// Essas mensagens aparecem no terminal quando você tenta iniciar o servidor 'index.js'.
// Olhe o arquivo 'index.js' para mais detalhes do servidor.
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
        // Mensagem de Erro.
        return;
    }
    console.log('Banco de dados conectado!');
    // Mensagem de êxito.
});

module.exports = connection;
