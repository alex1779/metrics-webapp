import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (

    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Financial Modeling Prep</h1>
      </div>
    </header>

  );
}

export default Navbar;
