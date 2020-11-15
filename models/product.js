const sequelize = require("../config/db");

module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        title: type.STRING,
        description: type.TEXT,
        imageUrl: type.STRING,
    })
}