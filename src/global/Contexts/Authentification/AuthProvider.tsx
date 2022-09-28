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
import { AuthDispatchContext } from "./AuthDispatchContext ";
import { AuthStateContext } from "./AuthStateContext";
import { useAuthentification } from "./customHook/useAuthentification";
import { IAuthContext } from "./interfaces";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  const { authState, dispatchAuth }: IAuthContext = useAuthentification();

  return (
    <AuthStateContext.Provider value={authState}>
      <AuthDispatchContext.Provider
        value={React.useMemo(() => ({ dispatchAuth }), [dispatchAuth])}
      >
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default AuthProvider;
