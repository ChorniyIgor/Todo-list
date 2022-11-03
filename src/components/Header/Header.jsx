import Container from "../../UI/Container/Container";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <h1 className={styles.Title}>TODO</h1>
        <button className={styles.ModeBtn}>Light mode</button>
      </Container>
    </header>
  );
};

export default Header;
