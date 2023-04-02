DROP DATABASE libertyco;
CREATE DATABASE libertyco;
USE libertyco;

CREATE TABLE Instituicao (
	idInstituicao INT PRIMARY KEY AUTO_INCREMENT,
    razaoSoc VARCHAR(120),
    cnpj VARCHAR(14),
    email VARCHAR(100),
    cep VARCHAR(8),
    numero INT,
    complemento VARCHAR(10),
    token VARCHAR(6),
    senha VARCHAR(45)
);

CREATE TABLE Gerente (
	idGerente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    ultimoNome VARCHAR (45),
    cargo VARCHAR(25),
    email VARCHAR(45),
    senha VARCHAR(45),
    fkInstituicao INT, FOREIGN KEY (fkInstituicao) REFERENCES Instituicao(idInstituicao)
);

CREATE TABLE Telefone (
	idTelefone INT PRIMARY KEY AUTO_INCREMENT,
    numTelefone CHAR(14),
    numCelular CHAR(15),
    senha VARCHAR(45),
    fkInstituicao INT, FOREIGN KEY (fkInstituicao) REFERENCES Instituicao(idInstituicao),
    fkGerente INT, FOREIGN KEY (fkGerente) REFERENCES Gerente(idGerente)
);

CREATE TABLE Maquina (
	idMaquina INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45),
    SO VARCHAR(45),
    senha VARCHAR(45),
    fkGerente INT, FOREIGN KEY (fkGerente) REFERENCES Gerente(idGerente)
);

CREATE TABLE CPU (
	idCPU INT PRIMARY KEY AUTO_INCREMENT,
    CPUcol VARCHAR(45),
    utilizacao DOUBLE,
    velocidade DOUBLE,
    qtdProcessos INT,
    tempoAtividade TIME,
    fkMaquina INT, FOREIGN KEY (fkMaquina) REFERENCES Maquina(idMaquina)
);

CREATE TABLE Memoria (
	idMemoria INT PRIMARY KEY AUTO_INCREMENT,
    velocidade DOUBLE,
    emUso DOUBLE,
    taxaLeitura DOUBLE,
    taxaEscrita DOUBLE,
    ddr INT,
    fkMaquina INT, FOREIGN KEY (fkMaquina) REFERENCES Maquina(idMaquina)
);

SELECT * FROM Instituicao;

UPDATE Instituicao SET token = 1234 WHERE idInstituicao = 1;

/* CREATE TABLE Disco (
	idMemoria INT PRIMARY KEY AUTO_INCREMENT,
    velocidade DOUBLE,
    emUso DOUBLE,
    taxaLeitura DOUBLE,
    taxaEscrita DOUBLE,
    ddr INT,
    fkMaquina INT, FOREIGN KEY (fkMaquina) REFERENCES Maquina(idMaquina)
); */