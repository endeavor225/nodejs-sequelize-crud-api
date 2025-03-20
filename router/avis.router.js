const express = require("express");
const router = express.Router();
const CONTROLLER = require("../controllers/Avis.controller");
const verifieToken = require("../middlewares/auth");

/**
 * @swagger
 * /api/avis/add:
 *   post:
 *     summary: Ajouter un nouvel avis
 *     description: Permet à un utilisateur d'ajouter un avis pour un article donné avec une note et un commentaire.
 *     tags: [Avis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *                 description: Note de l'avis (de 1 à 5)
 *                 example: 4
 *               comment:
 *                 type: string
 *                 description: Commentaire de l'avis
 *                 example: "Très bon produit, je suis satisfait !"
 *               articleId:
 *                 type: integer
 *                 description: ID de l'article pour lequel l'avis est ajouté
 *                 example: 1
 *               userId:
 *                 type: integer
 *                 description: ID de l'utilisateur qui laisse l'avis
 *                 example: 123
 *     responses:
 *       201:
 *         description: Avis ajouté avec succès
 *       400:
 *         description: Mauvaise requête, les données sont invalides
 *       401:
 *         description: Utilisateur non autorisé (token manquant ou invalide)
 */
router.post("/add", CONTROLLER.postAvis);

/**
 * @swagger
 * /api/avis/delete/{avisId}:
 *   delete:
 *     summary: Supprimer un avis
 *     description: Permet de supprimer un avis en utilisant son ID.
 *     tags: [Avis]
 *     parameters:
 *       - in: path
 *         name: avisId
 *         required: true
 *         description: ID de l'avis à supprimer
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Avis supprimé avec succès
 *       401:
 *         description: Utilisateur non autorisé
 *       404:
 *         description: Avis non trouvé
 */
router.delete("/delete/:avisId", verifieToken, CONTROLLER.deleteAvis);

module.exports = router;
