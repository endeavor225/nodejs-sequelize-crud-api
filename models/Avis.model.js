const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Avis = db.define('avis', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    timesTamps: true, 
})

module.exports = Avis;