const connection = require("./connection");
const { DataTypes } = require("sequelize");

const Subvention = connection.define("Subvention", {
    idSubvention: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },

    typeSubvention: {
        type: DataTypes.ENUM("Déblocage", "Demande", "Exceptionnelle"),
        allowNull: false
    }, 

    montant: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    dateSubvention: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Subvention;