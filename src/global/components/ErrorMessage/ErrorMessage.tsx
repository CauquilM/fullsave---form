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

import * as React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

import { CustomMessage } from "../CustomMessage";
import { IErrorMessage } from "./interfaces";
import "./styles.scss";

/**
 * Permet d'afficher un message d'erreur
 */
const ErrorMessage: React.FC<IErrorMessage> = ({ error }) => {
  if (error === "Request failed with status code 404") {
    return (
      <CustomMessage
        icon={<FreeBreakfastIcon />}
        title="404"
        message="Page introuvable"
      />
    );
  }

  return (
    <div className="errorMessage">
      <div className="errorMessage-title">
        <ErrorOutlineIcon fontSize="large" color="error" />
        <h2>{error}</h2>
      </div>
      <span>
        Si ce problème persiste, veuillez contacter l'équipe SI sur #si.support
      </span>
    </div>
  );
};

export default ErrorMessage;
