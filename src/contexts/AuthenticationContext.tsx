import { createContext } from "react";

export const AuthentificationContext = createContext({
  isConnected: false,
  setIsConnected: (isConnected: boolean) => {},
});
