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

export function decodeFilters(
  filters: string,
  params: string[],
  defaultType?: string[]
): string {
  const urlParams: URLSearchParams = new URLSearchParams(filters);
  let filterUrl: string = "";

  for (let i = 0; i < params.length; i++) {
    const valName: string = params[i];
    let valParam: string | null = urlParams.get(params[i]);

    if (valParam) {
      if (!defaultType || !defaultType.includes(valParam)) {
        filterUrl += `&${valName}=${valParam}`;
      }
    }
  }
  if (defaultType) {
    if (!urlParams.get("archived")) {
      filterUrl += `&archived=false`;
    }
    if (!urlParams.get("type")) {
      const type: string = defaultType.reduce(
        (prevVal, curVal) => prevVal + `&type=${curVal}`,
        ""
      );
      filterUrl += type;
    } else {
      const type: string = urlParams
        .getAll("type")
        .reduce((prevVal, curVal) => prevVal + `&type=${curVal}`, "");
      filterUrl += type;
    }
  }
  return filterUrl;
}
