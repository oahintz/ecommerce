const sequelize = require("../config/db");

module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        username: type.STRING,
        password: type.STRING,
        age: type.STRING,
    })
}