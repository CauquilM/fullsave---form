/*
 * ====================[ START FS LICENSE ]====================
 * © 2020 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import * as React from "react";
import { useListState } from "../../Contexts/List";
import { TData } from "../../types/TData";
import { TDataList } from "../../types/TDataList";
import { TState } from "../../types/TState";
import fetchDataList from "./functions/fetchDataList";
import resetDataList from "./functions/resetDataList";

function useFetchDataList<DataType>(
  mock: any,
  defaultOrder: string,
  notLoadOnMount?: true
): [
  TState<TData<TDataList<DataType>>>,
  React.Dispatch<React.SetStateAction<TState<TData<TDataList<DataType>>>>>
] {
  const [stateAxios, setStateAxios] = React.useState<
    TState<TData<TDataList<DataType>>>
  >({
    error: null,
    isLoading: true,
    data: null,
  });

  const { order, isDesc, offset, actionType, filters } = useListState();
  const init = React.useRef<boolean>(true);
  React.useEffect(() => {
    if (notLoadOnMount && init.current) {
      return;
    } else {
      if (actionType === "handleOffset" || actionType === "initValue") {
        fetchDataList<DataType>({
          mock,
          order,
          isDesc,
          offset,
          filters,
          setStateAxios,
          stateAxios,
          defaultOrder,
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionType, offset]);

  React.useEffect(() => {
    if (!init.current) {
      if (
        actionType === "handleFilter" ||
        actionType === "handleOrder" ||
        actionType === "initValue"
      ) {
        resetDataList<DataType>({
          mock,
          order,
          isDesc,
          offset,
          filters,
          setStateAxios,
          stateAxios,
          defaultOrder,
        });
      }
    } else {
      init.current = false;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionType, isDesc, filters]);

  return [stateAxios, setStateAxios];
}

export default useFetchDataList;
