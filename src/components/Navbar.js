import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navigation bg-white">
      <div className="navbar md-6 d-flex">
        <div className="d-flex align-center w-100c">
          <Link to="/" className="logo txt-primary">
            Bookstore CMS
          </Link>
          <div className="d-flex spc-btw nav-link">
            <ul className="d-flex">
              <Link to="/" className="nav-item txt-upper txt-dark">
                Books
              </Link>
              <Link to="/categories" className="nav-item txt-upper txt-dark">
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
