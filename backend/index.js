////////////////////////////////
//     Criação do Servidor    //
////////////////////////////////

// Quando dentro da pasta 'backend' no terminal, utilize 'node index.js' para iniciar o servidor
// Você pode usar aplicativos como Postman ou Insomnia para visualizar o servidor rodando (utilize o endereço 'httsp://localhost:3000/')
// Ou pode apenas usar esse endereço no navegador

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());            // Libera acesso de outros locais
app.use(express.json());    // Faz a API entender JSON no corpo das requisições (o JSON que vai vir do front-end)
app.use(express.urlencoded({ extended: true }));


// Rota inicial (só pra testar se o servidor está no ar)
app.get('/', (req, res) => {
    res.send('🚀 API do ConectDoa funcionando!');
});

// Sobe o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
});



////////////////////////////////
//     Utilizando Rotas       //
////////////////////////////////

// Caso queira usar uma nova rota


// Importando todas as rotas aqui
const empresasRoutes = require('./routes/empresas');
const doacoesRoutes = require('./routes/doacoes');
const usuariosRoutes = require('./routes/usuarios');
const administradorRoutes = require('./routes/administrador');

// Usando as rotas importadas aqui
app.use('/empresas', empresasRoutes);
app.use('/doacoes', doacoesRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/admin', administradorRoutes);
// localhost:3000/rota