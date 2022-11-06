const STORAGE_KEY = "TODOS_APP_STATE";

export const loadState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEY);

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);

    localStorage.setItem(STORAGE_KEY, stateToBeSaved);
  } catch (e) {
    console.log(e);
  }
};
