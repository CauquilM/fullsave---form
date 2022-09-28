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

import { IListStateContext } from "../interfaces";
import { parseParamToNumber } from "./parseParamToNumber";
import { parseParamToFilter } from "./parseParamToFilter";

export function initValues(): IListStateContext {
  const urlParams: URLSearchParams = new URLSearchParams(
    document.location.search.substring(1)
  );
  return {
    filters: parseParamToFilter(),
    showFilters: true,
    isDesc: urlParams.get("order")?.includes("-") ? true : false,
    limit: parseParamToNumber("limit", 50),
    offset: parseParamToNumber("offset", 0),
    order: urlParams.get("order")?.replaceAll("-", "") || "",
    actionType: "initValue",
    row: null,
  };
}
