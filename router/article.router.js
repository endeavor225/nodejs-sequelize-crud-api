const express = require("express");
const router = express.Router();
const CONTROLLER = require("../controllers/Article.controller");

/**
 * @swagger
 * /api/article/add:
 *   post:
 *     summary: Ajouter un nouvel article
 *     description: Crée un article avec des informations telles que le nom, le contenu, la catégorie, etc.
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Article 1"
 *               content:
 *                 type: string
 *                 example: "Description détaillée de l'article."
 *               category:
 *                 type: string
 *                 example: "Électronique"
 *               brand:
 *                 type: string
 *                 example: "Marque X"
 *               price:
 *                 type: number
 *                 example: 99.99
 *     responses:
 *       201:
 *         description: Article créé avec succès
 *       400:
 *         description: Mauvaise requête, paramètres invalides
 */
router.post("/add", CONTROLLER.createArticle);

/**
 * @swagger
 * /api/article/all:
 *   get:
 *     summary: Récupérer tous les articles
 *     description: Renvoie une liste de tous les articles disponibles.
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Article 1"
 *                   category:
 *                     type: string
 *                     example: "Électronique"
 *                   price:
 *                     type: number
 *                     example: 99.99
 *       500:
 *         description: Erreur interne du serveur
 */
router.get("/all", CONTROLLER.getAllArticles);

/**
 * @swagger
 * /api/article/get/{id}:
 *   get:
 *     summary: Récupérer un article par son ID
 *     description: Renvoie les détails d'un article spécifique en fonction de son ID.
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à récupérer
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Détails de l'article
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Article 1"
 *                 content:
 *                   type: string
 *                   example: "Contenu détaillé de l'article."
 *                 category:
 *                   type: string
 *                   example: "Électronique"
 *       404:
 *         description: Article non trouvé
 */
router.get("/get/:id", CONTROLLER.getArticle);

/**
 * @swagger
 * /api/article/update/{id}:
 *   put:
 *     summary: Mettre à jour un article
 *     description: Permet de mettre à jour un article existant.
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à mettre à jour
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Article mis à jour"
 *               content:
 *                 type: string
 *                 example: "Contenu mis à jour."
 *               category:
 *                 type: string
 *                 example: "Électronique"
 *               price:
 *                 type: number
 *                 example: 120.00
 *     responses:
 *       200:
 *         description: Article mis à jour avec succès
 *       400:
 *         description: Mauvaise requête, données invalides
 *       404:
 *         description: Article non trouvé
 */
router.put("/update/:id", CONTROLLER.updateArticle);

/**
 * @swagger
 * /api/article/delete/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     description: Supprime un article existant en fonction de son ID.
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à supprimer
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Article supprimé avec succès
 *       404:
 *         description: Article non trouvé
 */
router.delete("/delete/:id", CONTROLLER.deleteArticle);

/**
 * @swagger
 * /api/article/avis/{id}:
 *   get:
 *     summary: Récupérer les avis d'un article
 *     description: Permet de récupérer tous les avis associés à un article donné.
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article pour lequel récupérer les avis
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Liste des avis pour l'article
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   rating:
 *                     type: integer
 *                     example: 5
 *                   comment:
 *                     type: string
 *                     example: "Excellent produit!"
 *       404:
 *         description: Aucun avis trouvé pour cet article
 */
router.get("/avis/:id", CONTROLLER.articleWithAvis);

module.exports = router;
