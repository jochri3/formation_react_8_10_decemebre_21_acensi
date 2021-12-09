import { useState, useEffect } from "react";
import IContact from "../../@types/i-contact";
import ContactsList from "../../components/contacts-list/";
import { AxiosResponse } from "axios";
import { fetchAll } from "../../services/contact.api";

export const IndexContacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id === id));
  };

  useEffect(() => {
    fetchAll().then((response: AxiosResponse) => {
      setContacts(response.data);
    });
  }, []);

  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};
