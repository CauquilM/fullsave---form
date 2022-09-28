/*
 * ====================[ START FS LICENSE ]====================
 * © 2020 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import React from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

import { ICustomMessage } from "./interface";
import "./styles.scss";

/**
 * Permet d'afficher une information à l'utilisateur lorsqu'il n'y a rien.
 *
 * Exemple de cas d'usage: l'API ne retourne pas de donnée; il y a une interdiction d'accès;
 */
const CustomMessage: React.FC<ICustomMessage> = ({
  title,
  message,
  icon,
}): JSX.Element => (
  <div className="customMessage">
    <div className="customMessage-icon">
      {icon ? icon : <NotInterestedIcon />}
    </div>
    <div className="customMessage-message">
      <h2>{title}</h2>
      {message && <span>{message}</span>}
    </div>
  </div>
);

export default CustomMessage;
