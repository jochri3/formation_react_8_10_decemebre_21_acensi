import ActionTypes from "./types";
import IContact from "../../@types/i-contact";

export interface IFetchContacts {
  type: ActionTypes.FETCH_CONTACTS;
  payload: IContact[];
}
