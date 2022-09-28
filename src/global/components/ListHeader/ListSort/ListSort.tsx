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
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { IListSort } from "./interfaces";
import { handleSort } from "./functions/handleSort";

import "./listSort.scss";
import { TListSortOption } from "../../../types/TListSortOption";
import {
  IListStateContext,
  useListState,
  IListDispatchContext,
  useListDispatch,
} from "../../../Contexts/List";

function ListSort<T>({
  options,
  params,
  setParams,
}: IListSort<T>): JSX.Element {
  const { isDesc, order }: IListStateContext = useListState();
  const { dispatchList }: IListDispatchContext = useListDispatch();
  const [option, setOption] = React.useState<TListSortOption<T>>({
    label: "",
    value: "",
  });
  React.useEffect(() => {
    const optionFromContext: TListSortOption<T> | undefined = options.find(
      (opt: TListSortOption<T>) => opt.value === order
    );
    setOption(
      optionFromContext
        ? optionFromContext
        : {
            label: "",
            value: "",
          }
    );
  }, [options, order]);

  return (
    <div className="commonList-sort">
      <FormControl variant="outlined" className={`commonList-sort-order`}>
        <InputLabel htmlFor="outlined-age-native-simple">Tri</InputLabel>
        <Select
          native
          open
          value={option.value}
          onChange={(event: SelectChangeEvent<"" | keyof T>) =>
            handleSort(
              event.target.value as string,
              params,
              isDesc,
              dispatchList,
              "order",
              setParams
            )
          }
          label="Tri"
        >
          {options.map((opt: TListSortOption<T>) => (
            <option key={opt.label} value={opt.value as string}>
              {opt.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <button
        className="commonList-sort-desc"
        onClick={() => {
          handleSort(order, params, isDesc, dispatchList, "sort", setParams);
        }}
      >
        {isDesc ? "desc" : "asc"}
      </button>
    </div>
  );
}

export default ListSort;
