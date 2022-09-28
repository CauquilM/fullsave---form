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
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import ExitIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useAuthDispatch } from "../../Contexts/Authentification/customHook/useAuthDispatch";
import { IAuthDispatchContext } from "../../Contexts/Authentification/interfaces";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { dispatchAuth }: IAuthDispatchContext = useAuthDispatch();

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  /**
   * @description Sert à la déconnection de l'utilisateur. Utilisation d'une fonction arrow function pour fixer le this
   */
  function logout() {
    dispatchAuth({ type: "logout" });
  }
  const isOpen = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        size="large"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        keepMounted
        className="menuUser"
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem component={Link} className="link" to={`/`}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={""} />
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </div>
  );
}
