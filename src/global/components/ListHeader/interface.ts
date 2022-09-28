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

import { NavigateFunction, URLSearchParamsInit } from "react-router-dom";
import { TListSortOption } from "../../types/TListSortOption";

interface IListHeader<T> {
  navigate: NavigateFunction;
  title: string;
  options: TListSortOption<T>[];
  createPermission?: boolean;
  textLink?: string;
  href?: string;
  params: URLSearchParams;
  setParams: (nextInit: URLSearchParamsInit) => void;
}
export interface IListerHeaderWithoutChildren<T> extends IListHeader<T> {
  hasFilters?: never;
  children?: never;
}
export interface IListerHeaderWithChildren<T> extends IListHeader<T> {
  hasFilters: true;
  children: React.ReactNode;
}
