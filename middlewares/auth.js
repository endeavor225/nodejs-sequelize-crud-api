const jwt = require('jsonwebtoken');
const ENV = require('../config');
const createError = require('./error');

const verifieToken = (req, res, next) => { 

  //Récupère le jeton JWT à partir des cookies de la requête
  const token = req.cookies.access_token;

  // Renvoie une erreur 401 (accès refusé)
  if(!token) return next(createError(401, "Acces Denied !"))

  // Vérifier la validité du jeton en utilisant jwt.verify
  jwt.verify(token, ENV.TOKEN, (err, user ) => {
    // Renvoie une erreur 403 (interdit)
    // Car le jeton (token) n'est pas valide
    if(err) return next(createError(403, "Token non valide !!", err.message))

    req.user = user

    next();
  })
}

module.exports = verifieToken;