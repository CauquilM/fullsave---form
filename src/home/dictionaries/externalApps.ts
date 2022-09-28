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

/**
 * @description liste les applications utilisées
 * @returns Object contenant des objects représentants les applications utiliées
 */

// Logos

import racktables from "../../global/ressources/images/apps/racktables.png";
import azendoo from "../../global/ressources/images/apps/azendoo.png";
import backup from "../../global/ressources/images/apps/backup.png";
import cameras from "../../global/ressources/images/apps/cameras.png";
import eauGlacee from "../../global/ressources/images/apps/eau_glacee.png";
import gitlabRed from "../../global/ressources/images/apps/gitlab_red.png";
import iterop from "../../global/ressources/images/apps/iterop.png";
import kibana from "../../global/ressources/images/apps/kibana.png";
import mail from "../../global/ressources/images/apps/mail.png";
import metrologie from "../../global/ressources/images/apps/metrologie.png";
import miseEnService from "../../global/ressources/images/apps/mise-en-service.png";
import myPortal from "../../global/ressources/images/apps/myportal.png";
import observium from "../../global/ressources/images/apps/observium.png";
import observiumRed from "../../global/ressources/images/apps/observium_red.png";
import otrs from "../../global/ressources/images/apps/otrs.png";
import portailEit from "../../global/ressources/images/apps/portail_eit.png";
import rtSewan from "../../global/ressources/images/apps/rt_sewan.png";
import share from "../../global/ressources/images/apps/share.png";
import shinken from "../../global/ressources/images/apps/shinken.png";
import siPlugins from "../../global/ressources/images/apps/si-plugin.png";
import sophia from "../../global/ressources/images/apps/sophia.png";
import supervision from "../../global/ressources/images/apps/supervision.png";
import supportSewan from "../../global/ressources/images/apps/support_sewan.png";
import telesoft from "../../global/ressources/images/apps/telesoft.png";
import tools from "../../global/ressources/images/apps/tools.png";
import trello from "../../global/ressources/images/apps/trello.png";
import vault from "../../global/ressources/images/apps/vault.png";
import wikiClient from "../../global/ressources/images/apps/wiki-clients.png";
import wikinext from "../../global/ressources/images/apps/wiki-interne.png";
import dl from "../../global/ressources/images/apps/dl.png";
import { TListApp } from "../types/TListApp";

export const listApp: TListApp = {
  otrs: {
    label: "OTRS",
    uri: "",
    img: otrs,
    shortDesc: "",
  },
  racktables: {
    label: "Racktables",
    uri: "",
    img: racktables,
    shortDesc: "",
  },
  wikiInterne: {
    label: "Wiki Interne",
    uri: "",
    img: wikinext,
    shortDesc: "",
  },
  wikiClient: {
    label: "Wiki Clients",
    uri: "",
    img: wikiClient,
    shortDesc: "",
  },
  vault: {
    label: "Vault",
    uri: "",
    img: vault,
    shortDesc: "",
  },
  myPortal: {
    label: "MyPortal",
    uri: "",
    img: myPortal,
    shortDesc: "",
  },
  gitlabRed: {
    label: "Gitlab Red",
    uri: "",
    img: gitlabRed,
    shortDesc: "",
  },
  kibana: {
    label: "Kibana",
    uri: "",
    img: kibana,
    shortDesc: "",
  },
  siPlugins: {
    label: "SI-Plugins",
    uri: "",
    img: siPlugins,
    shortDesc: "",
  },
  tools: {
    label: "Tools",
    uri: "",
    img: tools,
    shortDesc: "",
  },
  backup: {
    label: "Backup",
    uri: "",
    img: backup,
    shortDesc: "",
  },
  extranet: {
    label: "Extranet",
    uri: "",
    img: backup,
    shortDesc: "",
  },
  observium: {
    label: "Observium",
    uri: "",
    img: observium,
    shortDesc: "",
  },
  observiumRed: {
    label: "Observium Red",
    uri: "",
    img: observiumRed,
    shortDesc: "",
  },
  shinken: {
    label: "Shinken",
    uri: "",
    img: shinken,
    shortDesc: "",
  },
  azendoo: {
    label: "Azendoo",
    uri: "",
    img: azendoo,
    shortDesc: "",
  },
  miseEnService: {
    label: "Mise en service",
    uri: "",
    img: miseEnService,
    shortDesc: "",
  },
  sophia: {
    label: "Sophia",
    uri: "",
    img: sophia,
    shortDesc: "",
  },
  rtSewan: {
    label: "RT Sewan",
    uri: "",
    img: rtSewan,
    shortDesc: "",
  },
  supportSewan: {
    label: "Support Sewan",
    uri: "",
    img: supportSewan,
    shortDesc: "",
  },
  telesoft: {
    label: "Telesoft",
    uri: "",
    img: telesoft,
    shortDesc: "",
  },
  portailEit: {
    label: "Portail EIT",
    uri: "",
    img: portailEit,
    shortDesc: "",
  },
  supervisionTls00: {
    label: "Supervision TLS00",
    uri: "",
    img: supervision,
    shortDesc: "",
  },
  metrologieTls00: {
    label: "Metrologie TLS00",
    uri: "",
    img: metrologie,
    shortDesc: "",
  },
  iterop: {
    label: "Iterop",
    uri: "",
    img: iterop,
    shortDesc: "",
  },
  mail: {
    label: "Mails",
    uri: "",
    img: mail,
    shortDesc: "",
  },
  cameras: {
    label: "Cameras",
    uri: "",
    img: cameras,
    shortDesc: "",
  },
  eauGlacee: {
    label: "Production eau glacée",
    uri: "",
    img: eauGlacee,
    shortDesc: "",
  },
  share: {
    label: "Share",
    uri: "",
    img: share,
    shortDesc: "",
  },
  trello: {
    label: "Trello",
    uri: "",
    img: trello,
    shortDesc: "",
  },
  dl: {
    label: "DL",
    uri: "",
    img: dl,
    shortDesc: "",
  },
};
