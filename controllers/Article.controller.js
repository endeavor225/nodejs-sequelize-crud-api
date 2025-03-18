const { Article, Avis } = require('../models');
const createError = require('../middlewares/error'); 

exports.createArticle = async (req, res, next) => {
  try{
    const newArticle = await Article.create(req.body);
    res.status(201).json(newArticle);
  }catch(error){
    next(createError(500, "Erreur lors de création d'article", error.message))
  }
}

exports.getAllArticles = async (req, res, next) => {
  try{
    const articles = await Article.findAll();
    res.status(200).json(articles);
  }catch(error){
    next(createError(500, "Erreur lors de la récupération des articles", error.message))
  }
}

exports.getArticle = async (req, res, next) => {
  try{    
    const article = await Article.findByPk(req.params.id);
    res.status(200).json(article);
  }catch(error){
    next(createError(500, "Erreur lors de la récupération des articles", error.message))
  }
}

exports.updateArticle = async (req, res, next) => {
  try{    
    // Mettre à jour l'article
    const  [updateRows] = await Article.update(req.body, {
      where: { id: req.params.id }
    })

    // Vérification si un article a été mis à jour
    if(updateRows === 0) return next(createError(404, "Article non trouvé !"))
    
    // Récupérer l'article mis à jour
    const updatedArticle = await Article.findOne({ where: { id: req.params.id } })

    return res.status(200).json(updatedArticle);
  }catch(error){
    next(createError(500, "Erreur lors de la récupération des articles", error.message))
  }
}


exports.deleteArticle = async (req, res, next) => {
  try{    
    const deleted = await Article.destroy({
      where: { id: req.params.id}
    })

    if(deleted === 0) return next(createError(404, "Article non trouvé !"))

    return res.status(200).json({ message: "Article supprimé avec succès !"})
  }catch(error){
    next(createError(500, "Erreur lors de la récupération des articles", error.message))
  }
}

exports.articleWithAvis = async (req, res, next) => {
  try{    
    const article = await Article.findByPk(req.params.id, {
      include: {
        model: Avis,
        as: "avis"
      }
    });

    if(!article) return next(createError(404, "Article non trouvé !!!! "))

  return res.status(200).json(article)
  }catch(error){
    next(createError(500, "Erreur lors de la récupération des articles avec les avis", error.message))
  }
}

