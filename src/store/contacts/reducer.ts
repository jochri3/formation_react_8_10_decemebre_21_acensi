import IContact from "../../@types/i-contact";
import ActionTypes from "./types";
import { IFetchContacts } from "./actions";

interface IContactState {
  list: IContact[];
}

const initialState: IContactState = {
  list: [],
};

const contactReducer = (
  state: IContactState = initialState,
  action: IFetchContacts
) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
