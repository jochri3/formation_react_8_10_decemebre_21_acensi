import React, { useState } from "react";
import IContact from "../../@types/i-contact";
import ContactForm from "../../components/contact-form";

const initialState: IContact = {
  id: 0,
  fname: "",
  lname: "",
  email: "",
  phoneNumber: "",
  address: "",
};

export const CreateContact = () => {
  const [contact, setContact] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      
  };

  return (
    <>
      <h1>Add contact</h1>
      <ContactForm
        contact={contact}
        buttonLabel="Ajouter"
        submitForm={submitForm}
        handleChange={handleChange}
      />
    </>
  );
};
