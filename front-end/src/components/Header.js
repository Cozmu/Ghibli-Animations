import { Link, useHistory } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import logoGhibli from '../images/image 2.png';
import '../style/Header.css';

export default function Header() {
  const history = useHistory();
  const { location: { pathname } } = history;
  return (
    <header className="header-container">
      <img src={ logoGhibli } alt="ghibli-logo" />
      <nav className="nav">
        <Link
          className="link"
          to={ pathname === '/' ? '/favorites' : '/' }
        >
          {pathname === '/'
            ? <BsFillSuitHeartFill className="favorite-link" />
            : <IoHomeOutline className="home-link" />}
        </Link>
        <h3>{pathname === '/' ? 'Favorites' : 'Main Page'}</h3>
      </nav>
    </header>
  );
}
