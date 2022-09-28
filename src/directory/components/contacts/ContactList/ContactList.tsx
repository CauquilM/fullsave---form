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
import { Paper } from "@mui/material";

import { useSearchParams, useNavigate } from "react-router-dom";

import { ListHeader } from "../../../../global/components/ListHeader";
import { FilterContact } from "./FilterContact";
import { sortOptionsContact } from "./dictionaries";
import ContactListContent from "./ContactListContent";

const ContactList: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  document.title = "Contact";

  return (
    <Paper className="commonList">
      <ListHeader
        navigate={navigate}
        title="Liste des contacts"
        hasFilters
        href=""
        textLink="Ajouter un service"
        createPermission={false}
        options={sortOptionsContact}
        params={params}
        setParams={setParams}
      >
        <FilterContact />
      </ListHeader>
      <ContactListContent />
    </Paper>
  );
};

export default ContactList;
