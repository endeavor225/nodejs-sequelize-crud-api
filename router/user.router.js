const express = require("express");
const router = express.Router();
const CONTROLLER = require("../controllers/User.controller");

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     description: Permet à un nouvel utilisateur de s'inscrire avec un email, un mot de passe et un prénom.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prenom:
 *                 type: string
 *                 description: Le prénom de l'utilisateur
 *                 example: "John"
 *               email:
 *                 type: string
 *                 description: L'email de l'utilisateur
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Mauvaise requête, données invalides
 *       409:
 *         description: L'email est déjà utilisé
 */
router.post("/register", CONTROLLER.signup);

/**
 * @swagger
 * /api/user/sign:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     description: Permet à un utilisateur de se connecter en utilisant son email et son mot de passe.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: L'email de l'utilisateur
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie, token généré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huLmRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTYxNjg1OTM3NywiZXhwIjoxNjE2ODU5NzM3fQ.c3baxlk..."
 *       400:
 *         description: Mauvaise requête, données invalides
 *       401:
 *         description: Identifiants incorrects (email ou mot de passe erronés)
 */
router.post("/sign", CONTROLLER.signin);

/**
 * @swagger
 * /api/user/all:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     description: Permet de récupérer la liste de tous les utilisateurs enregistrés.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
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
 *                   prenom:
 *                     type: string
 *                     example: "John"
 *                   email:
 *                     type: string
 *                     example: "john.doe@example.com"
 *                   role:
 *                     type: string
 *                     example: "user"
 *                   isActive:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Erreur interne du serveur
 */
router.get("/all", CONTROLLER.getAllUsers);

module.exports = router;
