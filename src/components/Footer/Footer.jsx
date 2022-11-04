import Container from "../../UI/Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={styles.Footer}>
      <p>Drag and drop to reorder list</p>
    </Container>
  );
};

export default Footer;
