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

import * as React from "react";

import {
  SkeletonList,
  ShowMoreData,
} from "../../../../../global/components/List";
import { CustomMessage } from "../../../../../global/components/CustomMessage";
import { ErrorMessage } from "../../../../../global/components/ErrorMessage";
import { TDataList } from "../../../../../global/types/TDataList";
import { TData } from "../../../../../global/types/TData";
import { TState } from "../../../../../global/types/TState";
import { TContact } from "../../types/TContact";
import { useContact } from "./hooks";
import CardContact from "./CardContact";

const ContactListContent: React.FC = () => {
  const { data, error, isLoading }: TState<TDataList<TData<TContact>>> =
    useContact();
  if (isLoading && !data) return <SkeletonList showCount />;
  if (error) return <ErrorMessage error={error} />;
  if (!data || data.count === 0)
    return (
      <CustomMessage
        title="Aucun contact"
        message="Aucun contact défini ou correspondant à votre recherche"
      />
    );

  return (
    <div className="commonList-responsive">
      <h2 id="list-count">
        {data.count} contact
        {data.count > 1 ? "s" : null} trouvé
        {data.count > 1 ? "s" : null}
      </h2>
      {data.documents.map(
        (contact: TDataList<TContact>): JSX.Element => (
          <CardContact key={contact.id.toString()} contact={contact} />
        )
      )}
      {isLoading && <SkeletonList />}
      {data.count > data.documents.length && data.documents.length <= 100 && (
        <ShowMoreData text="Voir plus de contact" />
      )}
    </div>
  );
};
export default ContactListContent;
