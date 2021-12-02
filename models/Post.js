const db = require('./db')

const Post = db.sequelize.define('postages',{
    title: {
        type: db.Sequelize.STRING
    },
    contents: {
        type: db.Sequelize.TEXT
    }
});


module.exports = Post