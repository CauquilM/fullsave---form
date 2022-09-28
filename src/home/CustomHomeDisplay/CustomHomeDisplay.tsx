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
import { Grid } from "@mui/material";
import { listApp } from "../dictionaries/externalApps";
import { TConfig } from "../CustomHomeSelect/types";
import { CUSTOM_HOME_CONFIGURATIONS } from "../dictionaries/option";
import { ICustomHomeDisplay } from "./interfaces";

import AppLink from "../../global/components/AppLink/AppLink";
import { Tools } from "./types";

import "./customHomeDisplay.scss";

const CustomHomeDisplay: React.FC<ICustomHomeDisplay> = ({
  customHome,
}): JSX.Element => {
  const configs: TConfig = CUSTOM_HOME_CONFIGURATIONS.filter(
    (conf: TConfig) => {
      return conf.value === customHome.value;
    }
  )[0];

  const preprodTools: (Tools | null)[] = Object.keys(listApp).map(
    (app: string, index: number): Tools | null =>
      configs.tools.includes(app) ? Object.values(listApp)[index] : null
  );

  return (
    <Grid className="home" container spacing={3}>
      {preprodTools
        .filter((app) => {
          return app !== null;
        })
        .map((app: Tools | null) => {
          if (app !== null) {
            return (
              <Grid item className="grid" key={app.label} xs={6} lg={3}>
                <AppLink
                  link={app.uri}
                  img={app.img}
                  label={app.label}
                  key={app.label}
                />
              </Grid>
            );
          }
          return null;
        })}
    </Grid>
  );
};

export default CustomHomeDisplay;
