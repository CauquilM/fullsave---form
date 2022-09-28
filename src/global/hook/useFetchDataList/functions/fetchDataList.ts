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

import { TFetchDataList } from "../../../types/TFetchDataList";
import _ from "lodash";
import { TDataList } from "../../../types/TDataList";
export default function fetchDataList<DataType>({
  mock,
  order,
  isDesc,
  offset,
  setStateAxios,
  stateAxios,
  defaultOrder,
}: TFetchDataList<DataType>): void {
  if (!stateAxios.isLoading) {
    setStateAxios({
      error: null,
      isLoading: true,
      data: stateAxios.data,
    });
  }

  const valuesSorted: TDataList<DataType>[] = _.orderBy(
    mock.documents,
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
    data: stateAxios.data
      ? {
          ...stateAxios.data,
          documents: [
            ...stateAxios.data.documents.map((val: DataType) => ({
              ...val,
              isCache: true as true,
            })),
            ...valuesOffset,
          ],
        }
      : { ...mock, documents: valuesOffset },
  });
}
