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

import React, { useState } from "react";
// import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Menu from "./global/components/Menu";
// import PortexRoutes from "./PortexRoutes";
import "./global/ressources/styles/appCss.scss";
import PrivateRoute from "./PrivateRoute";
import Home from "./home/Home";
import Login from "./login/login";
import { AuthentificationContext } from "./contexts/AuthenticationContext";

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  return (
    <>
      <AuthentificationContext.Provider value={{ isConnected, setIsConnected }}>
        <Router>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<Home />}  path="/" />
            </Route>
            <Route element={<Login/>} path="/login" />
          </Routes>
        </Router>
      </AuthentificationContext.Provider>

      {/* <BrowserRouter>
        <main className="portex">
          <Menu />
          
            <section className="content">
              <PortexRoutes />
            </section>
          
        </main>
      </BrowserRouter> */}
      {/* <Toaster
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
      /> */}
    </>
  );
};

export default App;
