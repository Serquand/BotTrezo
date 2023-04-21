const connection = require("./connection");
const { DataTypes } = require("sequelize");
const Bilan = require("./bilan");

const facture = connection.define("Facture", {
    idFacture: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },

    nameFacture: {
        type: DataTypes.STRING(100),
        allowNull: false, 
    },

    facturePath: {
        type: DataTypes.STRING(100),
        allowNull: false, 
    },

    idBilan: {
        type: DataTypes.INTEGER,
        references: {
            model: Bilan, 
            key: 'bilanId'
        }
    }
}, {    
    timestamps: false
});

module.exports = facture;