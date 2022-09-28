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

/**
 * Used by DrawerMenu to display the list items
 */

import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PersonIcon from "@mui/icons-material/Person";
import { TApiDrawer } from "../types";

export function apiDrawer(): TApiDrawer[] {
  return [
    {
      index: 1,
      name: "annuaire",
      title: "Annuaire",
      icon: <FolderSharedIcon />,
      subDrawer: [
        {
          title: "Contacts",
          icon: <PersonIcon />,
          link: "/contacts/list",
        },
      ],
    },
  ];
}
