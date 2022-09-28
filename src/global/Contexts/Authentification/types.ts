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

import { TUser } from "../../types/TUser";

export type TAuthActions =
  | { type: "setAuthentification"; payload: TAuthentication }
  | { type: "renewAuthentification"; payload: TAuthentication }
  | { type: "logout"; payload?: never };

export type TAuthentication = {
  document_type: "authentication";
  user: TUser;
};
