import { Link } from "react-router-dom";
import IContact from "../../../@types/i-contact";

interface ContactListItemProps {
  deleteContact: (id: number) => void;
  contact: IContact;
}

const ContactItem: React.FC<ContactListItemProps> = ({
  contact,
  deleteContact,
}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fname}</td>
      <td>{contact.lname}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <Link to={`/contacts/${contact.id}`}>Voir</Link>
        <button onClick={() => deleteContact(contact.id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default ContactItem;
