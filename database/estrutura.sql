create schema ConectDoa;
use ConectDoa;

CREATE TABLE Administrador (
    IDAdmin INTEGER PRIMARY KEY,
    Nome VARCHAR (150),
    Email VARCHAR (150),
    Senha VARCHAR (150)
);

CREATE TABLE Usuarios (
    IDUsuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    CPF VARCHAR(11) NOT NULL,
    Nome VARCHAR(150) NOT NULL,
    Idade INTEGER,
    NomeUsuario VARCHAR(150) UNIQUE,
    Email VARCHAR(150) UNIQUE,
    Senha VARCHAR(150) NOT NULL,
    Endereco VARCHAR(150)
);

CREATE TABLE Empresas (
    IDEmpresa INTEGER PRIMARY KEY,
    CNPJ INTEGER,
    Nome VARCHAR (150),
    Email VARCHAR (150),
    Telefone VARCHAR (150),
    Descricao VARCHAR (255),
    fk_Administrador_IDAdmin INTEGER
);

CREATE TABLE Doacoes (
    IDDoacao INTEGER PRIMARY KEY,
    DataDoacao DATE,
    Descricao VARCHAR (255),
    Status VARCHAR (50),
    fk_Empresas_IDEmpresa INTEGER,
    fk_Usuarios_IDUsuario INTEGER
);
 
ALTER TABLE Empresas ADD CONSTRAINT FK_Empresas_2
    FOREIGN KEY (fk_Administrador_IDAdmin)
    REFERENCES Administrador (IDAdmin)
    ON DELETE RESTRICT;
 
ALTER TABLE Doacoes ADD CONSTRAINT FK_Doacoes_2
    FOREIGN KEY (fk_Empresas_IDEmpresa)
    REFERENCES Empresas (IDEmpresa)
    ON DELETE RESTRICT;
 
ALTER TABLE Doacoes ADD CONSTRAINT FK_Doacoes_3
    FOREIGN KEY (fk_Usuarios_IDUsuario)
    REFERENCES Usuarios (IDUsuario)
    ON DELETE RESTRICT;
    
ALTER TABLE Empresas MODIFY COLUMN CNPJ VARCHAR(150);