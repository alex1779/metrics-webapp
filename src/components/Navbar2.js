import { BsArrowLeftCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/Navbar.module.css';

function Navbar({ name }) {
  return (

    <header className={styles.header}>
      <NavLink
        to="/"
      >
        <BsArrowLeftCircle
          color="white"
          size="7vw"
        />
      </NavLink>

      <div>
        <h1 className={styles.title}>{name}</h1>
      </div>
    </header>

  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
