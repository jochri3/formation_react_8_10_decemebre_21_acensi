import ActionTypes from "./types";
import IContact from "../../@types/i-contact";

export interface IFetchContacts {
  type: ActionTypes.FETCH_CONTACTS;
  payload: IContact[];
}

export interface IFetchContactById {
  type: ActionTypes.FETCH_CONTACT_BY_ID;
  payload: IContact;
}

export interface IAddContact {
  type: ActionTypes.ADD_CONTACT;
  payload?: IContact;
}

export type Action = IFetchContacts | IFetchContactById | IAddContact;
