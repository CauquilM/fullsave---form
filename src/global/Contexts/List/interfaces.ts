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

import React, { ReactNode } from "react";
import { URLSearchParamsInit } from "react-router-dom";
import { TActionsList } from "../../types/TActionsList";

export interface IListProvider {
  params: URLSearchParams;
  setParams: (nextInit: URLSearchParamsInit) => void;
  children: ReactNode;
}

export interface IListStateContext {
  offset: number;
  limit: number;
  filters: string;
  showFilters: boolean;
  order: string;
  isDesc: boolean;
  row: null | unknown;
  actionType:
    | "initValue"
    | "handleOffset"
    | "handleLimit"
    | "handleFilter"
    | "handleOrder"
    | "rowActionStart"
    | "rowActionInProgress"
    | "openModal"
    | "rowActionFinish"
    | "toogleDesc";
}

export interface IListDispatchContext {
  dispatchList: React.Dispatch<TActionsList>;
}

export interface IListContext extends IListDispatchContext {
  stateList: IListStateContext;
}
