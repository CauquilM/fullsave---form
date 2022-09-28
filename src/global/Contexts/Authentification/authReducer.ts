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

import { IAuthStateContext } from "./interfaces";
import { TAuthActions, TAuthentication } from "./types";

export function authReducer(
  state: IAuthStateContext,
  action: TAuthActions
): IAuthStateContext {
  const { type, payload } = action;
  switch (type) {
    case "setAuthentification":
      return {
        currentUser: (payload as TAuthentication).user,
        isLoggedIn: true,
      };
    case "renewAuthentification":
      return {
        currentUser: (payload as TAuthentication).user,
        isLoggedIn: true,
      };
    case "logout":
      return {
        currentUser: null,
        isLoggedIn: false,
      };

    default:
      throw new Error("Sorry, this type doesn't exist");
  }
}
