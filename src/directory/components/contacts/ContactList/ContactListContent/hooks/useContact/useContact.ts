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

import { TData } from "../../../../../../../global/types/TData";
import { TDataList } from "../../../../../../../global/types/TDataList";
import { TState } from "../../../../../../../global/types/TState";
import { TContact } from "../../../../types/TContact";
import { mockContact } from "../../dictionnaries/mockContact";
import useFetchDataList from "../../../../../../../global/hook/useFetchDataList";

const useContact = (): TState<TDataList<TData<TContact>>> => {
  const [stateDataList] = useFetchDataList<TContact>(mockContact, "first_name");

  return stateDataList;
};

export default useContact;
