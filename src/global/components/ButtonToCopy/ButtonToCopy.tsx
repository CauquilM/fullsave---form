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
import { IconButton, Tooltip } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import { copyToClipboard } from "./functions";
import { IButtonToCopy } from "./interface";

/**
 * This component can be used to copy text and phone number.
 * In the case of phone number, it remove spaces.
 * @param text
 * @returns Button to copy text param
 */
const ButtonToCopy: React.FC<IButtonToCopy> = ({ text }) => {
  return (
    <Tooltip title="Copier">
      <IconButton size="small" onClick={() => copyToClipboard(text)}>
        <FileCopyIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonToCopy;
