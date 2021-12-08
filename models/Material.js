const db = require('./db')


const Material = db.sequelize.define('materials',{
    cement: {
        type: db.Sequelize.STRING
    },
    gravel: {
        type: db.Sequelize.FLOAT
    },
    sand: {
        type: db.Sequelize.FLOAT
    },
    tile: {
        type: db.Sequelize.FLOAT
    },
});


module.exports = Material



