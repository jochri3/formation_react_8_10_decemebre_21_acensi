import { useEffect } from "react";
import IContact from "../../@types/i-contact";
import ContactsList from "../../components/contacts-list/";
import { fetchContacts } from "../../store/contacts/action.creators";
import { useSelector, useDispatch } from "react-redux";

export const IndexContacts = () => {
  const contacts = useSelector<any>((state) => state.contacts.list);
  const deleteContact = (id: number) => {
    //   setContacts(contacts.filter((contact) => contact.id === id));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <ContactsList
      contacts={contacts as IContact[]}
      deleteContact={deleteContact}
    />
  );
};
