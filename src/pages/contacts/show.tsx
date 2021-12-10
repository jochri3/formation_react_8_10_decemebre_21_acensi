import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IContact from "../../@types/i-contact";
import ContactItem from "../../components/contact-item";
import { fetchById } from "../../services/contact.api";
import { fetchContactById } from "../../store/contacts/action.creators";

interface Params {
  id: string;
}

export const ShowContact = () => {
  const id = parseInt(useParams<Params>().id);
  const contact = useSelector<any>((state) => state.contacts.item);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchById(id).then((response) => {
    //   setContact(response.data);
    // });
    dispatch(fetchContactById(id));
  }, []);

  return <ContactItem contact={contact as IContact} />;
};
