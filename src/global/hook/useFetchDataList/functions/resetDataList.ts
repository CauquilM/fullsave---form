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

import _ from "lodash";
import { TDataList } from "../../../types/TDataList";
import { TFetchDataList } from "../../../types/TFetchDataList";

export default function resetDataList<DataType>({
  mock,
  setStateAxios,
  defaultOrder,
  isDesc,
  offset,
  order,
  filters,
  stateAxios,
}: TFetchDataList<DataType>) {
  if (!stateAxios.isLoading) {
    setStateAxios({
      error: null,
      isLoading: true,
      data: null,
    });
  }
  setTimeout(() => {
    const filterParams: URLSearchParams = new URLSearchParams(filters);

    const keyFilter: string = filters
      ? (filters.match(/^.+(?=__.+)/gm) as string[])[0]
      : "";

    const valFilter: string | undefined = filterParams
      .get(`${keyFilter ? keyFilter : ""}__like`)
      ?.replace(/\*+/gm, "");

    const filtersValue = _.filter(mock.documents, (val: DataType) => {
      if (valFilter) {
        return ((val as any)[`${keyFilter}`] as string)
          .toLowerCase()
          .includes(valFilter);
      }
      return true;
    });

    const valuesSorted: TDataList<DataType>[] = _.orderBy(
      filtersValue,
      [order ? order : defaultOrder],
      [isDesc ? "desc" : "asc"]
    );
    const valuesOffset: TDataList<DataType>[] = _.slice(
      valuesSorted,
      offset,
      50 + offset
    );
    setStateAxios({
      error: null,
      isLoading: false,
      data: { ...mock, documents: valuesOffset, count: valuesOffset.length },
    });
  }, 500);
}
