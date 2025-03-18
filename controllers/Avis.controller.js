const { Avis  } = require('../models');
const createError = require('../middlewares/error'); 

exports.postAvis = async (req, res, next) => { 
  try{
    const avis = await Avis.create(req.body);
    return res.status(201).json('avis ajouté !')
  }catch(error){
    next(createError(500, "Erreur lors de création de l'avis !!!!", error.message))
  }
}

exports.deleteAvis = async (req, res, next) => { 
  try{
    // Trouver l'avis par son ID
    const avis = await Avis.findByPk(req.params.avisId)

    // Vérifier si l'avis existe
    if(!avis) return next(createError(404, "Avis non trouvé ! "));

    // Vérifier si l'user est le createur de l'avis
    if(avis.userId !== req.user.id) return next(createError(403, "Accès refusé ! "));

    await avis.destroy();

    return res.status(200).json({ message: "Avis supprimé avec succès !!!!"})
  }catch(error){
    next(createError(500, "Erreur lors de la suppression de l'avis !!!", error.message))
  }
}