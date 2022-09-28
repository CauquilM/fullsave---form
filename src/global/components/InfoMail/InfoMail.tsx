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

import React from "react";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import { IInfoMail } from "./interface";
import ButtonToCopy from "../ButtonToCopy";
import { Skeleton } from "../Skeleton";
import { NoText } from "../NoText";

const InfoMail: React.FC<IInfoMail> = ({ email, isLoading, error }) => {
  if (isLoading)
    return (
      <>
        <MailIcon />
        <span className="cardFS-content-label">Email :</span>
        <Skeleton height="36px" width="150px" />
      </>
    );

  if (error)
    return (
      <>
        <MailIcon />
        <span className="cardFS-content-label">Email :</span>
        <Button size="small" disabled className="lowercase">
          {error}
        </Button>
      </>
    );

  if (!email)
    return (
      <>
        <MailIcon />
        <span className="cardFS-content-label">Email :</span>
        <NoText />
      </>
    );

  return (
    <>
      <MailIcon />
      <span className="cardFS-content-label">Email :</span>
      <Button
        size="small"
        className="lowercase cardFS-content-value"
        component="a"
        href={`mailto:${email}`}
      >
        {email}
      </Button>
      <ButtonToCopy text={email} />
    </>
  );
};

export default InfoMail;
