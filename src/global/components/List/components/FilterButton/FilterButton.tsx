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
import { Chip } from "@mui/material";
import { IFilterButton } from "./interface";
import {
  IListStateContext,
  useListState,
  IListDispatchContext,
  useListDispatch,
} from "../../../../Contexts/List";

const FilterButton: React.FC<IFilterButton> = ({
  param,
  label,
  initialValue,
  deleteParams,
}) => {
  const { filters }: IListStateContext = useListState();
  const { dispatchList }: IListDispatchContext = useListDispatch();
  const [value, setValue] = React.useState<boolean>(initialValue);

  React.useEffect(() => {
    const params: URLSearchParams = new URLSearchParams(filters);
    const initialUrlValue: string | null = params.get(param);
    if (initialUrlValue) {
      const parseValue: boolean = JSON.parse(
        initialUrlValue.toLocaleLowerCase()
      );
      if (parseValue !== value) {
        setValue(parseValue);
      }
    } else {
      if (value) {
        setValue(false);
      }
    }
  }, [filters, param, value]);

  function handleFilter(newValue: boolean): void {
    const params: URLSearchParams = new URLSearchParams(filters);
    if (deleteParams) {
      deleteParams.forEach((deleteParam: string): void =>
        params.delete(deleteParam)
      );
    }
    setValue(newValue);
    params.set(param, `${newValue}`);
    dispatchList({
      type: "handleFilter",
      payload: params.toString(),
    });
  }

  return (
    <div className="filter">
      <Chip
        variant="outlined"
        onClick={() => handleFilter(!value)}
        label={label}
        className={value ? "filter-chip-value" : "filter-chip"}
      />
    </div>
  );
};

export default FilterButton;
