import * as React from "react";
import { FilterFreeSolo } from "../../../../../global/components/List/components";
import {
  IListStateContext,
  useListState,
} from "../../../../../global/Contexts/List";

export const FilterContact: React.FC = () => {
  const [openChild, setOpenChild] = React.useState<string>("");
  const { showFilters }: IListStateContext = useListState();
  React.useEffect(() => {
    if (!showFilters && openChild !== "") {
      setOpenChild("");
    }
  }, [openChild, showFilters]);
  return (
    <div className="filtersList">
      <FilterFreeSolo
        label="Nom du contact"
        param="last_name__like"
        setOpenChild={setOpenChild}
      />
    </div>
  );
};
