import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNewFilterValue } from "../../store/actions/filter";
import { getFilterValue } from "../../store/selectors/filter";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const allBtnClass = filterValue === "all" ? styles.activeBtn : "";
  const activeBtnClass = filterValue === "active" ? styles.activeBtn : "";
  const completedBtnClass = filterValue === "completed" ? styles.activeBtn : "";

  const onFilterBtnClickHandler = (value) => {
    dispatch(setNewFilterValue(value));
  };

  return (
    <div className={styles.FilterBtns}>
      <button
        className={allBtnClass}
        onClick={onFilterBtnClickHandler.bind(null, "all")}
      >
        All
      </button>
      <button
        className={activeBtnClass}
        onClick={onFilterBtnClickHandler.bind(null, "active")}
      >
        Active
      </button>
      <button
        className={completedBtnClass}
        onClick={onFilterBtnClickHandler.bind(null, "completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
