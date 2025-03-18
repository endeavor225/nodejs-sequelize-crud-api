const express = require('express');
const router = express.Router();
const CONTROLLER = require('../controllers/Article.controller');

router.post('/add', CONTROLLER.createArticle);
router.get('/all', CONTROLLER.getAllArticles);
router.get('/get/:id', CONTROLLER.getArticle);
router.put('/update/:id', CONTROLLER.updateArticle);
router.delete('/delete/:id', CONTROLLER.deleteArticle);
router.get('/avis/:id', CONTROLLER.articleWithAvis);



module.exports = router