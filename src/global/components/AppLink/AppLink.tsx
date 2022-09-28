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

import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

import { IAppLink } from "./interfaces";

// scss
import "./appLink.scss";

/**
 * Affiche une app externe de fullsave
 *
 */
const AppLink: React.FC<IAppLink> = ({ img, label, link }): JSX.Element => {
  return (
    <a
      href={link}
      className="applink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="applink-card">
        <CardActionArea>
          <CardMedia className="media" image={img} title={label} />
          <h5>{label}</h5>
        </CardActionArea>
      </Card>
    </a>
  );
};

export default AppLink;
