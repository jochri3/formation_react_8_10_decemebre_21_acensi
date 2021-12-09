import { useState, useEffect } from "react";
import IContact from "../@types/i-contact";
import ContactsList from "./contacts-list";
import axios, { AxiosResponse } from "axios";

const App = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id === id));
  };

  useEffect(() => {
    axios
      .get(" http://localhost:5000/contacts")
      .then((response: AxiosResponse) => {
        setContacts(response.data);
      });
  }, []);

  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default App;
