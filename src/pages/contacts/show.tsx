import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IContact from "../../@types/i-contact";
import ContactItem from "../../components/contact-item";
import { fetchById } from "../../services/contact.api";

interface Params {
  id: string;
}

export const ShowContact = () => {
  const id = parseInt(useParams<Params>().id);
  const [contact, setContact] = useState<IContact>({} as IContact);

  useEffect(() => {
    fetchById(id).then((response) => {
      setContact(response.data);
    });
  }, []);

  return <ContactItem contact={contact} />;
};
