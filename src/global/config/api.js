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

// Fichier créant une instance d'axios avec des params pas défauts
import axios from "axios";
import appConfig from "./config";

/**
 * Configure les paramètres par default d'axios
 */
export default axios.create({
  baseURL: appConfig.API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
