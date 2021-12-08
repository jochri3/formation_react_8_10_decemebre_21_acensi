import { useState } from "react";
import ContactsList from "./contacts-list";

const initialState = [
  {
    id: 1,
    fname: "Christian",
    lname: "Lisangola",
    email: "christian.lisangola@gmail.com",
    phoneNumber: "+33792669410",
    address: "3 rue de la gare",
  },
  {
    id: 2,
    fname: "Sarah",
    lname: "Blbabla",
    email: "blablasarah@gmail.com",
    phoneNumber: "+33792669410",
    address: "12 rue de la gare",
  },
  {
    id: 3,
    fname: "Jackson",
    lname: "Tototo",
    email: "jackson.lisangola@gmail.com",
    phoneNumber: "+33777777777",
    address: "Somewhere",
  },
  {
    id: 4,
    fname: "Anika",
    lname: "Skinner",
    email: "qyrohig@training.com",
    phoneNumber: "+3379932856",
    address: "Sit in eos voluptat",
  },
  {
    id: 5,
    fname: "Charlotte",
    lname: "William",
    email: "xumu@training.com",
    phoneNumber: "+3378100895",
    address: "Qui libero sint mag",
  },
  {
    id: 6,
    fname: "Linus",
    lname: "Stafford",
    email: "kuwuqyhico@training.com",
    phoneNumber: "+3378141562",
    address: "Voluptatem Laborum",
  },
  {
    id: 7,
    fname: "Suki",
    lname: "Coffey",
    email: "wukodu@training.com",
    phoneNumber: "+3373620701",
    address: "Tempore hic soluta ",
  },
];

interface IContact {
  id: number;
  fname: string;
  lname: string;
  email: string;
  phoneNumber: string;
  address: string;
}

// Avoir 2 components
// 1 - components qui va contenir le tableau(labels) : contacts.list.tsx
// 2 - component contact.item.tsx qui va contenir la ligne <tr>....</tr>

const App = () => {
  const [contacts, setContacts] = useState(initialState);
  const deleteContact = (id: number) => {
    const newContact = [...contacts];
    const index = newContact.findIndex((contact) => contact.id === id);
    newContact.splice(index, 1);
    setContacts(newContact);
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default App;
