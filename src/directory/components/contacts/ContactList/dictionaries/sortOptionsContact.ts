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

import { TListSortOption } from "../../../../../global/types/TListSortOption";
import { TContact } from "../../types/TContact";

export const sortOptionsContact: TListSortOption<TContact>[] = [
  {
    value: "first_name",
    label: "Prénom",
  },
  {
    value: "last_name",
    label: "Nom",
  },
  {
    value: "company_code",
    label: "FSC",
  },
];
