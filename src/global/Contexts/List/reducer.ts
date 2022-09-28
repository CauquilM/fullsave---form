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

import { IListStateContext } from "./interfaces";

import { initValues } from "./functions/initValues";
import { TActionsList } from "../../types/TActionsList";

export function reducer(
  state: IListStateContext,
  action: TActionsList
): IListStateContext {
  const { type, payload } = action;
  switch (type) {
    /**
     * augmente l'offset
     */
    case "handleOffset":
      return {
        ...state,
        offset: state.offset + state.limit,
        actionType: "handleOffset",
      };
    /**
     * change la limit
     */
    case "handleLimit":
      return {
        ...state,
        offset: 0,
        limit: payload as number,
        actionType: "handleLimit",
      };
    /**
     * change les filters
     */
    case "handleFilter":
      return {
        ...state,
        filters: payload as string,
        offset: 0,
        actionType: "handleFilter",
      };
    /**
     * change ascendant/descendant
     */
    case "toogleDesc":
      return {
        ...state,
        offset: 0,
        isDesc: !state.isDesc,
      };
    /**
     * display or hide filter
     */
    case "toogleFilters":
      return {
        ...state,
        showFilters: !state.showFilters,
      };
    /**
     * change ordre
     */
    case "handleOrder":
      return {
        ...state,
        offset: 0,
        order: payload as string,
        actionType: "handleOrder",
      };
    /**
     * start loading of the action
     */
    case "rowActionStart":
      return {
        ...state,
        row: payload,
        actionType: "rowActionStart",
      };
    /**
     *  update list with new data
     */
    case "rowActionInProgress":
      return {
        ...state,
        row: payload,
        actionType: "rowActionInProgress",
      };
    /**
     * stop loading of the action
     */
    case "rowActionFinish":
      return {
        ...state,
        actionType: "rowActionFinish",
      };
    /**
     * use when user open modal
     */
    case "openModal":
      return {
        ...state,
        row: payload,
        actionType: "openModal",
      };
    /**
     * init value
     */
    case "initValue":
      return {
        ...(payload as IListStateContext),
      };

    case "reset":
      return {
        ...initValues(),
        actionType: "initValue",
      };

    default:
      throw new Error(`Sorry, this type (${type}) doesn't exist`);
  }
}
