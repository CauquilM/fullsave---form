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

import { IListStateContext } from "../Contexts/List";

export type TActionsList =
  | {
      type: "initValue";
      payload: IListStateContext;
    }
  | {
      type: "handleLimit";
      payload: number;
    }
  | {
      type: "handleFilter" | "handleOrder";
      payload: string;
    }
  | {
      type: "rowActionStart" | "rowActionInProgress" | "openModal";
      payload: unknown;
    }
  | {
      type:
        | "reset"
        | "toogleDesc"
        | "handleOffset"
        | "toogleFilters"
        | "rowActionFinish";
      payload?: never;
    };
