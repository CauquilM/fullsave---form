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

import { INoText } from "./interface";
import "./styles.scss";

/**
 * Message générique utilisé lorsqu'il n'y pas d'information renseignée.
 */
const NoText: React.FC<INoText> = ({ isFeminine = false }) => (
  <span className="noText-italic">
    Non {isFeminine ? "renseignée" : "renseigné"}
  </span>
);

export default NoText;
