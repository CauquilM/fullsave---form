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

export function parseParamToNumber(
  nameParam: string,
  defaultValue: number
): number {
  const urlParams: URLSearchParams = new URLSearchParams(
    document.location.search.substring(1)
  );

  if (urlParams.get(nameParam)) {
    if (isNaN(parseInt(urlParams.get(nameParam) as string))) {
      return defaultValue;
    } else {
      return parseInt(urlParams.get(nameParam) as string);
    }
  } else {
    return defaultValue;
  }
}
