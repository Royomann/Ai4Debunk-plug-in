const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const websiteDataModel = sequelize.define('website_data', {
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    community_note: {
        type: DataTypes.STRING(500),
    }
}, {
    // Other model options go here
});

module.exports = websiteDataModel;