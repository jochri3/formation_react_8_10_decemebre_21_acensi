import React from "react";
import IContact from "../../@types/i-contact";
import Input from "../shared/input";
import Button from "../shared/button/";

interface ContactFormProps {
  isUpdate: boolean;
  contact: IContact;
  buttonLabel: string;
  handleChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  contact,
  buttonLabel,
  handleChange,
  submitForm,
  isUpdate,
}) => {
  return (
    <form onChange={handleChange} onSubmit={submitForm}>
      <Input
        label="First name"
        name="fname"
        placeholder="ex : Chris"
        value={contact.fname}
      />
      <Input
        label="Last name"
        name="lname"
        placeholder="ex : Lis"
        value={contact.lname}
      />
      <Input
        label="Email"
        name="email"
        placeholder="ex : chris@gmail.com"
        value={contact.email}
        type="email"
      />
      <Input
        label="Phone number"
        name="phoneNumber"
        placeholder="ex : +3347684765"
        value={contact.phoneNumber}
      />
      <Input
        label="Address"
        name="address"
        placeholder="ex : Rue de blablabla"
        value={contact.address}
      />
      <Button>{buttonLabel}</Button>
    </form>
  );
};

export default ContactForm;
