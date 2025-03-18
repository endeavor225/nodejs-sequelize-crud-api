console.log("🚀 Démarrage du serveur...");

const express = require("express");
const ENV = require("./config");
const { db } = require("./models");

const app = express();

// PORT
const PORT = ENV.PORT || 8085;

// SERVEUR
const startServer = async () => {
  try {
    await db.sync({ force: false }); // force: false Pour ne pas supprimer un table si elle existe
    console.log("✅ Database synced successfully !");

    app.listen(PORT, () => {
      console.log(`🚀 server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`❌ Error syncing database : `, error.message);
  }
};

startServer();
