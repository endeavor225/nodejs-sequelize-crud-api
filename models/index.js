const db = require("../config/db");

// Importer les modéles
const Article = require("./Article.model");
const User = require("./User.model");
const Avis = require("./Avis.model");

// Définir les rélations entre les modèles (tables)
Article.hasMany(Avis, { foreignKey: "articleId" });
Avis.belongsTo(Article, { foreignKey: "articleId" });

User.hasMany(Avis, { foreignKey: "userId" });
Avis.belongsTo(User, { foreignKey: "userId" });

// Exporter tous les modeles
module.exports = {
  db,
  Article,
  Avis,
  User,
};
