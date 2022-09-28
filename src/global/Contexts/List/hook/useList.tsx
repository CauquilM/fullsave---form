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
import { URLSearchParamsInit } from "react-router-dom";
import { TActionsList } from "../../../types/TActionsList";

import { initValues } from "../functions/initValues";
import { IListContext, IListStateContext } from "../interfaces";
import { reducer } from "../reducer";

export function useList(
  params: URLSearchParams,
  setParams: (nextInit: URLSearchParamsInit) => void
): IListContext {
  const [stateList, dispatchList] = React.useReducer<
    React.Reducer<IListStateContext, TActionsList>
  >(reducer, initValues());

  // Update url according to state
  React.useEffect(() => {
    const order: string | null = params.get("order");
    params.delete("page");
    params.delete("order");
    if (params.toString() !== stateList.filters) {
      const newParams: URLSearchParams = new URLSearchParams(
        `${stateList.filters}${order ? `&order=${order}` : ""}`
      );
      setParams(newParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateList.filters]);

  // Update state according to url
  React.useEffect(() => {
    if (params.toString() !== stateList.filters) {
      dispatchList({ type: "initValue", payload: initValues() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return { stateList, dispatchList };
}
