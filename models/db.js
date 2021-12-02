const Sequelize = require('sequelize');

//Connection with database MySql
    
const sequelize = new Sequelize('project', 'root', '235aa532aa', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}