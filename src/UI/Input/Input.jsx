import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.Input}>
      <input {...props.attr} />
    </div>
  );
};

export default Input;