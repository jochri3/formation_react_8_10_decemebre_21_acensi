const contacts = [
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

const App = () => {
  const deleteContact = (id: number) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    contacts.splice(index, 1);
    console.log("Taille : ", contacts.length);
    console.table(contacts);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Prenom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Numéro de Téléphone</th>
          <th>Adresse</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(({ id, fname, lname, address, email, phoneNumber }) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
              <td>{address}</td>
              <td>
                <button onClick={() => deleteContact(id)}>Supprimer</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
