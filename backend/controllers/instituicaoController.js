const db = require('../database/connection');

// Função para listar instituições
exports.listarInstituicoes = (req, res) => {
    const sql = 'SELECT * FROM instituicao';

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ erro: 'Erro ao buscar instituições', detalhes: err });
        } else {
            res.status(200).json(results);
        }
    });
};

// Função para criar uma nova instituição
exports.criarInstituicao = (req, res) => {
    const { nome, endereco, telefone, email } = req.body;

    if (!nome || !endereco || !telefone || !email) {
        return res.status(400).json({ erro: 'Preencha todos os campos' });
    }

    const sql = 'INSERT INTO instituicao (nome, endereco, telefone, email) VALUES (?, ?, ?, ?)';

    db.query(sql, [nome, endereco, telefone, email], (err, result) => {
        if (err) {
            res.status(500).json({ erro: 'Erro ao cadastrar instituição', detalhes: err });
        } else {
            res.status(201).json({ mensagem: 'Instituição cadastrada com sucesso!', id: result.insertId });
        }
    });
};
