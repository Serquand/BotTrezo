const connection = require("./connection.js");
const { DataTypes } = require("sequelize");

const bilan = connection.define("Bilan", {
    bilanId: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },

    typeBilan: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    date: {
        type: DataTypes.STRING(15), 
        allowNull: false, 
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT, 
        allowNull: true, 
    },

    value: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },

    restTotal: {
        type: DataTypes.FLOAT, 
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = bilan;