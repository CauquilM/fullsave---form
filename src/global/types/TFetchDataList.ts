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

import { TData } from "./TData";
import { TDataList } from "./TDataList";
import { TState } from "./TState";

export type TFetchDataList<DataType> = {
  setStateAxios: React.Dispatch<
    React.SetStateAction<TState<TData<TDataList<DataType>>>>
  >;
  mock: TData<TDataList<DataType>>;
  order: string;
  isDesc: boolean;
  offset: number;
  filters: string;
  stateAxios: TState<TData<TDataList<DataType>>>;
  defaultOrder: string;
};
