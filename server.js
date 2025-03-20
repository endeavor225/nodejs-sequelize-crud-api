console.log("🚀 Démarrage du serveur...");

const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const ENV = require("./config");
const { db } = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Version de Swagger
    info: {
      title: "API de gestion d'articles et d'avis", // Titre de l'API
      version: "1.0.0",
      description:
        "Cette API permet de gérer des articles, des avis et des utilisateurs.",
    },
    servers: [
      {
        url: `http://localhost:${ENV.PORT || 8085}`, // URL du serveur
      },
    ],
  },
  apis: ["./router/*.js"], // Chemin vers vos fichiers de routes pour générer la doc à partir des commentaires
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serveur Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
