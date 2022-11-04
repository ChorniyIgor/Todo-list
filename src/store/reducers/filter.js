import { SET_NEW_FILTER_VALUE } from "../consts/filter";

const initialState = {
  value: "all",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_FILTER_VALUE: {
      return { ...state, value: action.value };
    }
    default:
      return state;
  }
};

export default filterReducer;
