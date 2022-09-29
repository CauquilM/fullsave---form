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

import { useRoutes } from "react-router-dom";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import Home from "./home/Home";
import ContactRoutes from "./directory/components/contacts";

import { CustomMessage } from "./global/components/CustomMessage";
import AuthForm from "./login/login";

const PortexRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "*",
      element: (
        <CustomMessage
          icon={<FreeBreakfastIcon />}
          title="404"
          message="Page introuvable"
        />
      ),
    },
    {
      path: "/login",
      element: <AuthForm />,
    },

    ...ContactRoutes(),
  ]);
};

export default PortexRoutes;
