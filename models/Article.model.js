const { DataTypes } = require('sequelize');
const db = require('../config/db');

// Définir le modèle (la table user) avec Sequelize
const Article = db.define('Article', {
  name: {
    type: DataTypes.STRING,
    allowNull: false, // le champ est requis
    unique: true
  }, 
  content: {
    type: DataTypes.TEXT,
    allowNull: false, // le champ est requis
  }, 
  category: {
    type: DataTypes.STRING,
    allowNull: false, // le champ est requis
  }, 
  brand: {
    type: DataTypes.STRING,
    allowNull: false, // le champ est requis
  }, 
  price: {
    type: DataTypes.FLOAT,
    allowNull: false, // le champ est requis
  }, 
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false, // le champ est requis
    defaultValue: false
  }, 
  picture: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false, // le champ est requis
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false, // le champ est requis
  }
},
  {
    timesTemps: true, // Ajoute 'createAt' ET 'updatedAt'
    underscored: true, // snake_case
  });


module.exports = Article