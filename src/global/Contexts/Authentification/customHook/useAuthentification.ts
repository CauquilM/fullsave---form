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
import { authReducer } from "../authReducer";
import { initialState } from "../dictionnaries";
import { IAuthContext, IAuthStateContext } from "../interfaces";
import { TAuthActions } from "../types";

export const useAuthentification = (): IAuthContext => {
  const [authState, dispatchAuth] = React.useReducer<
    React.Reducer<IAuthStateContext, TAuthActions>
  >(authReducer, initialState);
  return { authState, dispatchAuth };
};
