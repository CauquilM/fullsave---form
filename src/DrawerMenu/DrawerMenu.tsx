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

import React, { useState } from "react";
//React-router
import { Link } from "react-router-dom";
// material ui
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Logo from "../global/ressources/images/logos/FullSave - Logo sans baseline.png";

import { apiDrawer } from "./functions/apiDrawer";
import { IDrawerMenu } from "./interface";
import SubDrawerMenu from "./SubDrawer/SubDrawer";
import { TSubDrawer, TApiDrawer } from "./types";
import "./styles.scss";

/**
 * The data of DrawerMenu are displayed from "apiDrawer"
 */
const DrawerMenu: React.FC<IDrawerMenu> = ({ variant, open, onClose }) => {
  const [indexDrawer, setIndexDrawer] = useState<number>(0);

  function handleClick(index: number): void {
    indexDrawer === index ? setIndexDrawer(0) : setIndexDrawer(index);
  }

  return (
    <Drawer
      variant={variant}
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: "drawerPaper",
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Link className="link" to="/">
        <img className="logo" src={Logo} alt="fullSave" />
      </Link>
      <Divider />
      <List className="drawer-list" component="nav">
        <ListItem
          className="drawer-list-item"
          button
          component={Link}
          to="/"
          onClick={() => handleClick(0)}
        >
          <ListItemIcon className="drawer-list-item-icon">
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>

        {apiDrawer().map(
          ({ index, title, icon, subDrawer }: TApiDrawer): JSX.Element => (
            <React.Fragment key={index}>
              <ListItem
                id={title}
                className="drawer-list-item"
                button
                onClick={() => handleClick(index)}
              >
                <ListItemIcon className="drawer-list-item-icon">
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                {indexDrawer === index ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={indexDrawer === index} timeout="auto" unmountOnExit>
                {subDrawer
                  .reduce(
                    (prev, cur) =>
                      typeof cur === "object" ? [...prev, cur] : prev,
                    [] as TSubDrawer[]
                  )
                  .map(
                    (item: TSubDrawer, indexSubDrawer: number): JSX.Element => (
                      <SubDrawerMenu key={indexSubDrawer} item={item} />
                    )
                  )}
              </Collapse>
            </React.Fragment>
          )
        )}
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
