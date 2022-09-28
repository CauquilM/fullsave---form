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
import { IListDispatchContext } from "../interfaces";
import { ListDispatchContext } from "../ListDispatchContext";

export const useListDispatch = (): IListDispatchContext => {
  const context =
    React.useContext<IListDispatchContext | null>(ListDispatchContext);
  if (!context) {
    throw new Error("useListDispatch must be used within a ListProvider");
  }
  return context;
};