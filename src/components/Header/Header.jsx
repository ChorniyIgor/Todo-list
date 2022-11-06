import Container from "../../UI/Container/Container";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../../store/actions/themes";

const Header = () => {
  const dispatch = useDispatch();

  const onThemeBtnClickhandler = () => {
    dispatch(toggleThemeMode);
  };
  return (
    <header className={styles.Header}>
      <Container className={styles.HeaderContainer}>
        <h1 className={styles.Title}>TODO</h1>
        <button className={styles.ModeBtn} onClick={onThemeBtnClickhandler}>
          Light mode
        </button>
      </Container>
    </header>
  );
};

export default Header;
