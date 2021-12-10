import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { fetchAll } from "../../services/contact.api";
import { IFetchContacts, IFetchContactById } from "./actions";
import { RootState } from "../root.reducer";
import ActionTypes from "./types";
import IContact from "../../@types/i-contact";

export const fetchContacts = () => {
  return (dispatch: Dispatch<IFetchContacts>) => {
    return fetchAll().then((response: AxiosResponse) => {
      dispatch({ type: ActionTypes.FETCH_CONTACTS, payload: response.data });
    });
  };
};

export const fetchContactById = (id: number) => {
  return (dispatch: Dispatch<IFetchContactById>, getState: () => any) => {
    const contacts = getState().contacts.list;
    const contact = contacts.find((contact: IContact) => contact.id === id);
    dispatch({
      type: ActionTypes.FETCH_CONTACT_BY_ID,
      payload: contact,
    });
  };
};
