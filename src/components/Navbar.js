import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navigation">
      <div className="container navbar d-flex">
        <div className="d-flex align-center w-100c">
          <Link to="/" className="logo">
            Bookstore CMS
          </Link>
          <div className="d-flex spc-btw nav-link">
            <ul className="d-flex">
              <Link to="/" className="nav-item">
                Books
              </Link>
              <Link to="/categories" className="nav-item">
                Categories
              </Link>
            </ul>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
