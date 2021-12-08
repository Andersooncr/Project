const db = require('./db')

const Post = db.sequelize.define('register',{
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
});


module.exports = Post