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

import { ListStateContext } from "./ListStateContext";
import { ListDispatchContext } from "./ListDispatchContext";
import { IListContext, IListProvider } from "./interfaces";
import { useList } from "./hook/useList";

export const ListProvider: React.FC<IListProvider> = ({
  children,
  params,
  setParams,
}) => {
  const { stateList, dispatchList }: IListContext = useList(params, setParams);
  return (
    <ListStateContext.Provider value={stateList}>
      <ListDispatchContext.Provider
        value={React.useMemo(() => ({ dispatchList }), [dispatchList])}
      >
        {children}
      </ListDispatchContext.Provider>
    </ListStateContext.Provider>
  );
};
