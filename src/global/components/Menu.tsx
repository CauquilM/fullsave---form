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

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "../../DrawerMenu/";

import Profile from "./Profile";
import { useAuthState } from "../Contexts/Authentification/customHook/useAuthState";
import { IAuthStateContext } from "../Contexts/Authentification/interfaces";
//Ressources
import "../ressources/styles/appCss.scss";
import "../../DrawerMenu/styles.scss";

const MenuApp: React.FC = () => {
  const lgUp: boolean = useMediaQuery("(max-width:1280px)");
  const [state, setState] = React.useState({
    mobileMoreAnchorEl: null,
    search: "",
    mobileOpen: false,
  });
  const { isLoggedIn }: IAuthStateContext = useAuthState();

  const setMobileOpen = () => {
    setState({ ...state, mobileOpen: !state.mobileOpen });
  };

  return (
    <section>
      <AppBar className={`appBar `}>
        <Toolbar>
          {lgUp && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={setMobileOpen}
              className="menuButton"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography color="inherit" noWrap>
            Portex V3
          </Typography>

          <div className="grow" />

          {isLoggedIn && <Profile />}
        </Toolbar>
      </AppBar>

      <nav className="drawer" aria-label="mailbox folders">
        {lgUp ? (
          <DrawerMenu
            variant="temporary"
            open={state.mobileOpen}
            onClose={setMobileOpen}
          />
        ) : (
          <DrawerMenu variant="permanent" open />
        )}
      </nav>
    </section>
  );
};

export default MenuApp;
