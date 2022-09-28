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
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Menu from "./global/components/Menu";
import PortexRoutes from "./PortexRoutes";
import "./global/ressources/styles/appCss.scss";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <main className="portex">
          <Menu />
          
            <section className="content">
              <PortexRoutes />
            </section>
          
        </main>
      </BrowserRouter>
      <Toaster
        gutter={30}
        toastOptions={{
          style: {
            borderRadius: "4px",
          },
          success: {
            duration: 6000,
          },
          error: {
            duration: 6000,
          },
        }}
      />
    </>
  );
};

export default App;
