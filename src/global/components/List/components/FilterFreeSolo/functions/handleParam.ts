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

import { debounce } from "debounce";
import { TActionsList } from "../../../../../types/TActionsList";

export const handleParam = debounce(
  (
    value: string | null,
    param: string,
    filters: string,
    dispatchList: React.Dispatch<TActionsList>
  ) => {
    const filtersParams: URLSearchParams = new URLSearchParams(filters);

    if (value) {
      filtersParams.delete("tag");
      filtersParams.set(param, `*${value}*`);
      dispatchList({ type: "handleFilter", payload: filtersParams.toString() });
    } else {
      if (filtersParams.get(param)) {
        filtersParams.delete(param);
        dispatchList({
          type: "handleFilter",
          payload: filtersParams.toString(),
        });
      }
    }
  },

  200
);
