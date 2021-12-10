import ActionTypes from "./types";

export const fetchContacts = () => {
  return {
    type: ActionTypes.FETCH_CONTACTS,
    payload: [
      {
        id: 2,
        fname: "Sarah",
        lname: "Blbabla",
        email: "blablasarah@gmail.com",
        phoneNumber: "+33792669410",
        address: "12 rue de la gare",
      },
    ],
  };
};

