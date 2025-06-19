create schema ConectaDoa;
use ConectaDoa;

CREATE TABLE Empresas (
    IDEmpresa INTEGER PRIMARY KEY,
    CNPJ INTEGER,
    Nome VARCHAR (150),
    Email VARCHAR (150),
    Telefone VARCHAR (150),
    Descricao VARCHAR (255),
    fk_Administrador_IDAdmin INTEGER
);

CREATE TABLE Usuarios (
    IDUsuario INTEGER PRIMARY KEY,
    CPF INTEGER,
    Nome VARCHAR (150),
    Idade INTEGER,
    NomeUsuario VARCHAR (150),
    Email VARCHAR (150),
    Senha VARCHAR (150),
    Endereco VARCHAR (150)
);

CREATE TABLE Doacoes (
    IDDoacao INTEGER PRIMARY KEY,
    DataDoacao DATE,
    Descricao VARCHAR (255),
    Status VARCHAR (50),
    fk_Empresas_IDEmpresa INTEGER,
    fk_Usuarios_IDUsuario INTEGER
);

CREATE TABLE Administrador (
    IDAdmin INTEGER PRIMARY KEY,
    Nome VARCHAR (150),
    Email VARCHAR (150),
    Senha VARCHAR (150)
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