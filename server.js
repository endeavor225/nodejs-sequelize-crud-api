console.log("🚀 Démarrage du serveur...");

const express = require("express");
const ENV = require("./config");
const { db } = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// IMPORTATIONS DES ROUTES
const userRouter = require("./router/user.router");
const articleRouter = require("./router/article.router");
const avisRouter = require("./router/avis.router");

// PORT
const PORT = ENV.PORT || 8085;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// PREFIX
app.use("/api/user", userRouter);
app.use("/api/article", articleRouter);
app.use("/api/avis", avisRouter);

// MIDDLEWARE DE GESTION D'ERREURS
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Une erreur est survenue.";
  const details = err.details || null;

  res.status(status).json({
    error: {
      status,
      message,
      details,
    },
  });
});

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
