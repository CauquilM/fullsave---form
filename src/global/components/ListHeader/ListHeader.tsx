/*
 * ====================[ START FS LICENSE ]====================
 * © 2019 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import { Grid } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import ListSort from "./ListSort";
import ListFilters from "./ListFilters";
import {
  IListerHeaderWithChildren,
  IListerHeaderWithoutChildren,
} from "./interface";
import "./listHeader.scss";
import { IListDispatchContext, useListDispatch } from "../../Contexts/List";

/**
 * This component display the header of list in app.
 * It needs to be used within list provider and router provider (BrowserRouter)
 */

function ListHeader<T>({
  navigate,
  title,
  textLink,
  href,
  hasFilters,
  createPermission,
  options,
  params,
  children,
  setParams,
}:
  | IListerHeaderWithoutChildren<T>
  | IListerHeaderWithChildren<T>): JSX.Element {
  const { dispatchList }: IListDispatchContext = useListDispatch();

  return (
    <div className="commonList-header">
      <div className="commonList-header-title">
        {title.includes("Liste des") ? (
          <h1 id="design">
            {title.substring(0, 9)}
            <br />
            <span>{title.substring(9)}</span>
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <Grid container spacing={1} className="commonList-header-actions">
        {createPermission && textLink && href && (
          <Grid item xs={12} id="actions-add">
            <button
              className="button button-add"
              onClick={() =>
                navigate(href, { state: { params: params.toString() } })
              }
            >
              {textLink}
            </button>
          </Grid>
        )}
        {hasFilters && (
          <Grid item xs={9} md={10} id="actions-filters">
            <div id="actions-filters-button">
              <button
                className="button button-filters"
                onClick={() => dispatchList({ type: "toogleFilters" })}
              >
                <FilterListIcon /> <span>Filtres</span>
              </button>
            </div>
            <ListFilters children={children} />
          </Grid>
        )}
        <Grid item xs={3} md={2} id="actions-sort">
          <ListSort params={params} options={options} setParams={setParams} />
        </Grid>
      </Grid>
    </div>
  );
}
export default ListHeader;
