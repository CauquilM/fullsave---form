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
import { URLSearchParamsInit } from "react-router-dom";

import { TActionsList } from "../../../../types/TActionsList";

export function handleSort(
  value: string,
  params: URLSearchParams,
  isDesc: boolean,
  dispatchList: React.Dispatch<TActionsList>,
  actionType: "order" | "sort",
  setParams: (nextInit: URLSearchParamsInit) => void
) {
  const initUrl: string = params.toString();
  if (value) {
    if (actionType === "order") {
      params.set("order", `${isDesc ? "-" : ""}${value}`);
    } else {
      params.set("order", `${isDesc ? "" : "-"}${value}`);
    }
  } else {
    params.delete("order");
  }
  if (params.toString() !== initUrl) {
    setParams(params);
  }
  if (actionType === "order") {
    dispatchList({ type: "handleOrder", payload: value });
  } else {
    dispatchList({ type: "toogleDesc" });
  }
}
