import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <label htmlFor="fdas" className={styles.Checkbox}>
      <input type="checkbox" id="fdas" checked={props.isChecked} readOnly />
      <div className={`${styles.CheckboxBlock} `}></div>
    </label>
  );
};

export default Checkbox;
