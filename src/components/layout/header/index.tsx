import { Link } from "react-router-dom";

// Header
const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Liste de contacts</Link>
          </li>
          <li>
            <Link to="/contact/new">Créer un contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
