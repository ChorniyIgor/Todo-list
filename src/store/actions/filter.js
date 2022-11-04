import { SET_NEW_FILTER_VALUE } from "../consts/filter";

export const setNewFilterValue = (value) => ({
  type: SET_NEW_FILTER_VALUE,
  value,
});
