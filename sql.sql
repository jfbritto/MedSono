CREATE TABLE respostas (
    id INT NOT NULL AUTO_INCREMENT,
    aceito TINYINT(1),
    email VARCHAR(50),
    sexo CHAR(1),
    faixa_etaria VARCHAR(10),
    periodo VARCHAR(10),
    frequencia_exercicios VARCHAR(10),
    alimentacao VARCHAR(10),
    p1 VARCHAR(10),
    p2 VARCHAR(10),
    p3 VARCHAR(10),
    p4 VARCHAR(10),
    p5a VARCHAR(10),
    p5b VARCHAR(10),
    p5c VARCHAR(10),
    p5d VARCHAR(10),
    p5e VARCHAR(10),
    p5f VARCHAR(10),
    p5g VARCHAR(10),
    p5h VARCHAR(10),
    p5i VARCHAR(10),
    p5j VARCHAR(10),
    p6 VARCHAR(10),
    p7 VARCHAR(10),
    p8 VARCHAR(10),
    p9 VARCHAR(10),
    componente1 VARCHAR(10),
    componente2 VARCHAR(10),
    componente3 VARCHAR(10),
    componente4 VARCHAR(10),
    componente5 VARCHAR(10),
    componente6 VARCHAR(10),
    componente7 VARCHAR(10),
    resultado VARCHAR(50),
    created_at DATETIME,
    updated_at DATETIME,
PRIMARY KEY (id));