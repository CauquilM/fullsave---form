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

import React, { useState, useEffect } from "react";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";

import CustomHomeSelect from "./CustomHomeSelect/CustomHomeSelect";
import CustomHomeDisplay from "./CustomHomeDisplay/CustomHomeDisplay";
import { TCookie } from "./CustomHomeSelect/types";
import { CUSTOM_HOME_COOKIE_LABEL } from "./dictionaries/cookie";

const Home: React.FC = (): JSX.Element => {
  document.title = "Portex";

  const navigate = useNavigate();

  // Var contains cookie of custom home displayed (home administration, home support, home commercial ...)
  const [customHomeCookie, setCustomHomeCookie] = useState<TCookie>(
    new Cookie().get(CUSTOM_HOME_COOKIE_LABEL) || {
      label: "Défaut",
      value: "default",
    }
  );

  // Custom home list display status
  const [displaySelect, setDisplaySelect] = useState<boolean>(true);

  useEffect(() => {
    // clear url
    const hash: number = window.location.hash
      ? window.location.hash.indexOf("#access_token=")
      : -1;

    if (hash !== -1) {
      const hashFragment: string[] = window.location.hash.split("&");
      const stateParam: string =
        hashFragment.find(
          (cur: string): boolean => cur.indexOf("state=") === 0
        ) || "";
      const encodeBaseUrl: string = `state=${encodeURIComponent(
        window.location.origin + "/"
      )}`;
      const path: string = decodeURIComponent(
        stateParam.substring(encodeBaseUrl.length)
      );
      navigate(path);
    }
  });

  function handleChangeCustomHomeCookie(newCustomHomeCookie: TCookie): void {
    new Cookie().set(CUSTOM_HOME_COOKIE_LABEL, newCustomHomeCookie, {
      secure: window.location.protocol === "https:" ? true : false,
    });
    setCustomHomeCookie(newCustomHomeCookie);
    setDisplaySelect(!displaySelect);
  }

  return (
    <div className="ch">
      <CustomHomeSelect
        handleChange={handleChangeCustomHomeCookie}
        setDisplaySelect={setDisplaySelect}
        displaySelect={displaySelect}
      />
      <h1 className="ch-mainTitle">Applications {customHomeCookie.label}</h1>
      <CustomHomeDisplay customHome={customHomeCookie} />
    </div>
  );
};

export default Home;
