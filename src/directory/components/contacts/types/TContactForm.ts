/*
 * ====================[ START FS LICENSE ]====================
 * © 2021 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import { TOption } from "../../../../global/types/TOption";
import { TOptionId } from "../../../../global/types/TOptionId";
import { TOptionPlace } from "../../../../global/types/TOptionPlace";

export type TContactForm = {
  readonly id?: string;
  company_code: TOption | null;
  last_name: string;
  first_name: string;
  email: string;
  gender?: TOption | null;
  phone?: string;
  cellular?: string;
  address?: TOptionPlace | null;
  address1?: string;
  address2?: string;
  zip_code?: string;
  city?: string;
  country?: TOption | null;
  is_archived?: boolean;
  function?: string;
  support_access?: boolean;
  poc_type: TOptionId[];
};
