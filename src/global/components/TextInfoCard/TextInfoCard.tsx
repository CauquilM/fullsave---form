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
import { Skeleton } from "../Skeleton";

import { ITextInfoCard } from "./interfaces";
import "./textInfoCard.scss";

const TextInfoCard: React.FC<ITextInfoCard> = ({
  icon,
  label,
  value,
  isFeminine,
  isLoading,
}) => {
  return (
    <span className={`textInfoCard textInfoCard-${label}`}>
      <span className="textInfoCard-icon">{icon}</span>
      {label && <span className="textInfoCard-label">{label} :</span>}
      <span className="textInfoCard-value">
        {isLoading ? (
          <Skeleton height="18px" width="150px" />
        ) : value ? (
          `${value}`
        ) : (
          <em>non défini{isFeminine && "e"}</em>
        )}
      </span>
    </span>
  );
};

export default TextInfoCard;
