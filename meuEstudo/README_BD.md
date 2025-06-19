# 📌 ConectDoa – Etapa 1: Banco de Dados

Este é o início do projeto **ConectDoa**, focado na criação do banco de dados MySQL.  
Aqui foi estruturado o banco que armazenará as informações sobre:

- Instituições
- Doações
- Usuários

---

## 🧱 Estrutura do Banco de Dados

As tabelas foram criadas no **MySQL Workbench**, com os seguintes comandos SQL:

```sql
    CREATE TABLE instituicao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    endereco VARCHAR(150),
    telefone VARCHAR(20),
    email VARCHAR(100)
    );

    CREATE TABLE doacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_instituicao INT,
    tipo VARCHAR(50),
    quantidade INT,
    data_doacao DATE,
    FOREIGN KEY (id_instituicao) REFERENCES instituicao(id)
    );

    CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
    );
```

## 🧪 Testes Realizados

- Inserção de dados com `INSERT INTO`
- Consulta com `SELECT * FROM`
- Verificação de tabelas com `SHOW TABLES;`
- Estrutura das tabelas com `DESCRIBE nome_da_tabela;`

## ✅ Resultado
- Banco de dados funcionando com sucesso.
- As tabelas estão relacionadas corretamente, com testes confirmando inserção e leitura dos dados.

---