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

import { TContactForm } from "./TContactForm";

export type TContact = Readonly<
  Omit<
    TContactForm,
    "company_code" | "country" | "address" | "gender" | "poc_type"
  > & {
    document_type: "contact";
    id: string;
    company_code: string;
    cache_id: string;
    created_at: string;
    updated_at?: string;
    archived_at?: string;
    country?: string;
    club_users?: boolean;
    gender?: string;
  }
>;
