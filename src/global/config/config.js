/*
 * ====================[ START FS LICENSE ]====================
 * © 2019 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

/**
 * Donne les paramêtres pour le fonctionnement de portex. A remplacer de le futur pour récupérer les fonctions après le build
 * cf : https://stackoverflow.com/questions/37239731/writing-embeddable-javascript-plugin-with-react-webpack
 */
const appConfig =
  (typeof window.appconfig === "function" && window.appconfig()) ||
  (function () {
    return {
      API_URL: process.env.REACT_APP_API_URL || "https://localhost:3000",
      AUTH_TYPE: process.env.REACT_APP_AUTH_TYPE || "oauth2", // pinus or oauth2
      DEPLOYMENT_ENVIRONMENT:
        process.env.REACT_APP_DEPLOYMENT_ENVIRONMENT || "preprod",
    };
  })();

export default appConfig;
