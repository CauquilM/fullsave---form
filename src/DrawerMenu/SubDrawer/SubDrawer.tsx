/*
 * ====================[ START FS LICENSE ]====================
 * © 2020 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import * as React from "react";

import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ISubDrawer } from "../interface";

const SubDrawer: React.FC<ISubDrawer> = ({ item }) => {
  return (
    <List component="div" disablePadding>
      <ListItem
        button
        className="drawer-list-subList drawer-list-item"
        component={item.link ? Link : "li"}
        to={{ pathname: item.link, search: "" }}
        onClick={(): void => {}}
      >
        <ListItemIcon className="drawer-list-item-icon">
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </List>
  );
};

export default SubDrawer;
