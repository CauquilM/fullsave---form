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

export type TApiDrawer = {
  index: number;
  name: string;
  title: string;
  icon: JSX.Element;
  subDrawer: (boolean | TSubDrawer)[];
};

export type TSubDrawer = {
  title: string;
  icon: JSX.Element;
  link?: string;
  onClick?: (toggleModal: () => void) => void;
};
