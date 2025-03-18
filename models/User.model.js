const { DataTypes } = require("sequelize");
const db = require("../config/db");

// Définir le modèle (la table user) avec Sequelize
const User = db.define(
  "User",
  {
    prenom: {
      type: DataTypes.STRING,
      allowNull: false, // le champ est requis
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "picture",
      allowNull: false, // le champ est requis
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // le champ est requis
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // le champ est requis
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // le champ est requis
      defaultValue: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // le champ est requis
      defaultValue: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        isIn: [["user", "moderator", "admin", "superAdmin"]],
      },
    },
  },
  {
    timesTemps: true, // Ajoute 'createAt' ET 'updatedAt'
    underscored: true, // snake_case
  }
);

module.exports = User;
