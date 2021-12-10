import IContact from "../../@types/i-contact";
import ActionTypes from "./types";
import { Action } from "./actions";

interface IContactState {
  list: IContact[];
  item: IContact;
}

const initialState: IContactState = {
  list: [],
  item: {} as IContact,
};

const contactReducer = (
  state: IContactState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_CONTACTS:
      return { ...state, list: action.payload };
    case ActionTypes.FETCH_CONTACT_BY_ID:
      return {
        ...state,
        item: state.list.find((contact) => contact.id === action.payload.id),
      };
    default:
      return state;
  }
};

export default contactReducer;
