import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (

    <header className={styles.header}>
      <div>
        <p className={styles.year}>2023</p>
      </div>

      <div>
        <h1 className={styles.title}>Financial Modeling Prep</h1>
      </div>

      <button type="button">
        <BsFillMicFill
          color="white"
          size="5vw"
        />
      </button>

      <button type="button">
        <BsFillGearFill
          color="white"
          size="5vw"
        />
      </button>
    </header>

  );
}

export default Navbar;
