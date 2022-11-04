import Card from "../../UI/Card/Card";
import Container from "../../UI/Container/Container";
import Input from "../../UI/Input/Input";
import styles from "./CreateNewTodoForm.module.css";

const CreateNewTodoForm = () => {
  return (
    <Container className={styles.FormContainer}>
      <Card>
        <form>
          <Input
            attr={{
              type: "text",
              placeholder: "Create a new todo…",
            }}
          />
        </form>
      </Card>
    </Container>
  );
};

export default CreateNewTodoForm;
