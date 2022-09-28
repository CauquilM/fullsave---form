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
  IListDispatchContext,
  useListDispatch,
} from "../../../../Contexts/List";

import { IShowMoreData } from "./interfaces";
import "./showMoreData.scss";
const ShowMoreData: React.FC<IShowMoreData> = ({ text }) => {
  const { dispatchList }: IListDispatchContext = useListDispatch();
  return (
    <div id="showMore">
      <button
        className="button-more"
        onClick={() => dispatchList({ type: "handleOffset" })}
      >
        {text}
      </button>
    </div>
  );
};

export default ShowMoreData;
