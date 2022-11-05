import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <label
      htmlFor={props.id}
      className={styles.Checkbox}
      onClick={props.onClick}
    >
      <input
        type="checkbox"
        id={props.id}
        checked={props.isChecked}
        readOnly
        onClick={props.onClick}
      />
      <div className={`${styles.CheckboxBlock} `}></div>
    </label>
  );
};

export default Checkbox;
