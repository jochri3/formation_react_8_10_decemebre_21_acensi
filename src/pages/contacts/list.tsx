import { useEffect } from "react";
import IContact from "../../@types/i-contact";
import ContactsList from "../../components/contacts-list/";
import { AxiosResponse } from "axios";
import { fetchAll } from "../../services/contact.api";
import { fetchContacts } from "../../store/contacts/action.creators";
import { useSelector, useDispatch } from "react-redux";

export const IndexContacts = () => {
  const contacts = useSelector<any>((state) => state.contacts.list);
  const deleteContact = (id: number) => {
    //   setContacts(contacts.filter((contact) => contact.id === id));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    // fetchAll().then((response: AxiosResponse) => {
    //   setContacts(response.data);
    // });
    dispatch(fetchContacts());
  }, []);

  return (
    <ContactsList
      contacts={contacts as IContact[]}
      deleteContact={deleteContact}
    />
  );
};
