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
import { TextField } from "@mui/material/";

import { handleParam } from "./functions/handleParam";
import { IFilterFreeSolo } from "./interfaces";
import "./filterFreeSolo.scss";
import {
  IListStateContext,
  useListState,
  IListDispatchContext,
  useListDispatch,
} from "../../../../Contexts/List";

const FilterFreeSolo: React.FC<IFilterFreeSolo> = ({
  label,
  param,
  setOpenChild,
}) => {
  const { filters }: IListStateContext = useListState();
  const { dispatchList }: IListDispatchContext = useListDispatch();
  const [value, setValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    const urlParams: URLSearchParams = new URLSearchParams(filters);
    let value: string | null = null;
    if (urlParams.get(param)) {
      value = (urlParams.get(param) as string).replace(/\*/gm, "");
    }
    setValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <TextField
      className={`filterFreeSolo ${value ? "filterFreeSoloHasValue" : ""}`}
      label={label}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        handleParam(e.target.value, param, filters, dispatchList);
      }}
      value={value || ""}
      variant="outlined"
      onClick={() => setOpenChild("")}
    />
  );
};

export default FilterFreeSolo;
