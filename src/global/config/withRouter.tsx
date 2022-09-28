/*
 * ====================[ START FS LICENSE ]====================
 * © 2022 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import * as React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function withRouter<P extends object>(Child: React.ComponentType<P>) {
  return (props: P) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Child
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
}
