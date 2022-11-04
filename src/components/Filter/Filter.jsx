import styles from "./Filter.module.css";
import Container from "../../UI/Container/Container";
import Card from "../../UI/Card/Card";

const Filter = () => {
  return (
    <Container className={styles.Filter}>
      <Card>
        <div className={styles.FilterBtns}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </Card>
    </Container>
  );
};

export default Filter;
