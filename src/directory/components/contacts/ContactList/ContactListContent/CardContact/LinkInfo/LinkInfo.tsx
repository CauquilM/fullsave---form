/*
 * ====================[ START FS LICENSE ]====================
 * © 2021 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

import { ILinkInfo } from "./interface";
import { Skeleton } from "../../../../../../../global/components/Skeleton";

const LinkInfo: React.FC<ILinkInfo> = ({
  icon,
  label,
  value,
  isLoading,
  url,
}) => {
  return (
    <>
      <span className="cardList-item-icon">{icon}</span>
      {label} :
      {isLoading ? (
        <Skeleton height="36px" width="150px" />
      ) : (
        <Button
          component={Link}
          className="cardList-item-value"
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<LinkIcon />}
        >
          {value || "non défini"}
        </Button>
      )}
    </>
  );
};

export default LinkInfo;
