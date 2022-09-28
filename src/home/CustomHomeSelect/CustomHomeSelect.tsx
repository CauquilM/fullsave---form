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

import React from "react";
import Select from "react-select";
import Cookies from "universal-cookie";
import { ICustomHomeSelect } from "./interfaces";

import { CUSTOM_HOME_COOKIE_LABEL } from "../dictionaries/cookie";
import { CUSTOM_HOME_CONFIGURATIONS } from "../dictionaries/option";

import "./customHomeSelect.scss";

const CustomHomeSelect: React.FC<ICustomHomeSelect> = ({
  handleChange,
  displaySelect,
  setDisplaySelect
}): JSX.Element => {
  /**
   * Remove custom home cookie and force select list display
   */
  function removeCookie(): void {
    new Cookies().remove(CUSTOM_HOME_COOKIE_LABEL);
    setDisplaySelect(!displaySelect);
  }

  return (
    <div className="ch-view">
      {displaySelect && (
        <div>
          <p onClick={removeCookie} className="ch-view-change">
            Changer de vue
          </p>
        </div>
      )}
      {!displaySelect && (
        <Select
          onChange={handleChange}
          options={CUSTOM_HOME_CONFIGURATIONS}
          placeholder={`Choisir une vue personnalisée`}
          className="react-select ch-view-select"
          classNamePrefix="select"
          isLoading={false}
        />
      )}
    </div>
  );
};

export default CustomHomeSelect;
