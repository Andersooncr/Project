mysql -h localhost -u root -p

CREATE DATABASE projeto;

USE projeto;

SHOW TABLES;

DESCRIBE users;

CREATE TABLE users(
    name VARCHAR(30),
    email VARCHAR(30),
    age INT(3)
);

SELECT * FROM users WHERE name = "Anderson";

INSERT INTO users (name,email,age) VALUES(
    "Luiz",
    "luiz@gmail.com",
    20
);

DELETE FROM users WHERE name = "Luiz";

UPDATE users SET email = "anderson970@gmail.com" WHERE email = "anderson@gmail.com";



CRUD WITH SEQUELIZE:

const "Tabela" =  sequelize.define('"nome da tabela"', {
    "Coluna": {
        type: Sequelize.STRING
    },
    "Coluna": {
        type: Sequelize.TEXT
    }
})

"Tabela".sync({force: true});

"Tabela".create({
    "Coluna": "Family",
    "Coluna": "Carmo's family"
});

"Tabela".update({"Coluna":"Informação"},{where:{id:1}});

"Tabela".destroy({where:{id:1}})








