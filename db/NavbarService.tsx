// https://asia-southeast1-<project-id>.cloudfunctions.net/navbarLinks
// https://asia-southeast1-aisling-vtuber-web.cloudfunctions.net/navbarLinks

import { environment } from 'environment/environment'
// import { Article } from "../model/Article";
// import { IPData } from "../model/IPData";
// import {
//   displayAlertErrorPopup,
//   displayAlertInfoPopup,
// } from "../view/small_components/AlertInfoPopup";

/**
 * getNavbarLinks
 * take data from API database through GET request to return a list of navbar links
 *
 * @returns list of posts/example
 */
export class NavbarService {
  static async getAllNavbarLinks() {
    const response = await fetch(`${environment.apiUrl}navbarLinks.json`, {
      method: 'GET',
    })
    return response
  }
}
