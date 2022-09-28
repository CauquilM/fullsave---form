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
import { Card, CardHeader, CardContent, Grid, Chip } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import moment from "moment";
import LinkInfo from "./LinkInfo";
import { ICardUser } from "./interface";
import InfoMail from "../../../../../../global/components/InfoMail";
import TextInfoCard from "../../../../../../global/components/TextInfoCard";

const CardContact: React.FC<ICardUser> = ({ contact }) => {
  return (
    <div className="commonList-responsive-card">
      <Card className="cardList">
        <CardHeader
          className="cardList-header"
          title={
            <div className="cardList-header-title">
              <h2>{contact.last_name}</h2>
              <Chip
                variant="outlined"
                label={contact.gender}
                className={`cardList-header-chip ${
                  contact.gender === "M." ? "color-green" : "color-grey"
                }`}
              />
            </div>
          }
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <div className="cardList-item">
                <LinkInfo
                  icon={<BusinessIcon />}
                  label="Société"
                  url={`/company/${contact.company_code}`}
                  value={contact.company_code}
                  isLoading={false}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cardList-item">
                <LinkInfo
                  icon={<PersonIcon />}
                  label="Contact"
                  url={`/contacts/${contact.id}`}
                  value={`${contact.first_name} ${contact.last_name}`}
                  isLoading={false}
                />
              </div>
              <div className="cardList-item">
                <InfoMail
                  isLoading={false}
                  error={null}
                  email={contact?.email}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cardList-item">
                <TextInfoCard
                  icon={<></>}
                  label="Pays"
                  value={contact.country}
                  isLoading={false}
                />
              </div>
              <div className="cardList-item">
                <TextInfoCard
                  icon={<></>}
                  label="Créé le"
                  value={moment(contact.created_at).format("DD/MM/YYYY")}
                  isLoading={false}
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardContact;
