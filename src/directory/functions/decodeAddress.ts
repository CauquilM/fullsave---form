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

import { TOptionPlace } from "../../global/types/TOptionPlace";
import { TAddress } from "../types";

export default function decodeAddress({
  address2,
  zip_code,
  city,
}: TAddress): TOptionPlace | null {
  if (!address2 || !zip_code || !city) return null;

  const address: string = `${address2 ? `${address2},` : ""} ${
    zip_code || ""
  } ${city || ""}`;

  if (!address || !address.trim()) return null;
  return {
    label: address,
    value: address,
    properties: {
      name: address2,
      postcode: zip_code,
      city: city,
    },
  };
}
