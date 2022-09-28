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

import toast from "react-hot-toast";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function copyToClipboard(text: string): void {
  // Format text without spaces (for phone number and email)
  const textFormatted: string = text.split(" ").join("");

  // The Clipboard API is only supported for pages served over HTTPS (ex: Portex prod).
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textFormatted)
      .then(() =>
        toast(`${textFormatted} copié dans le presse-papiers !`, {
          icon: <FileCopyIcon />,
        })
      )
      .catch(() =>
        toast.error(
          `Une erreur est survenue, ${textFormatted} n'a pas pu être copié.`
        )
      );
  }
  // When HTTP and old navigators (ex: Portex preprod)
  else {
    const input: HTMLInputElement = document.createElement("input");
    document.body.appendChild(input);
    input.value = textFormatted;
    input.select();
    try {
      const result: boolean = document.execCommand("copy");
      if (result) {
        toast(`${input.value} copié dans le presse-papiers !`, {
          icon: <FileCopyIcon />,
        });
      } else {
        toast.error(
          `Une erreur est survenue, ${textFormatted} n'a pas pu être copié.`
        );
      }
    } catch (error) {
      toast.error(
        `Une erreur est survenue, ${textFormatted} n'a pas pu être copié.`
      );
    }
    document.body.removeChild(input);
  }
}
