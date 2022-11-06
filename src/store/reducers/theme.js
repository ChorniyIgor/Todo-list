import { THEME_MODE_TOGGLE } from "../consts/themes";

const initialState = {
  themeMode: "Dark",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_MODE_TOGGLE: {
      return {
        ...state,
        themeMode: state.themeMode === "Light" ? "Dark" : "Light",
      };
    }
    default:
      return state;
  }
};
