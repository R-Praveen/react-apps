export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (key: string, state: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    return undefined;
  }
};

export const removeState = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    return undefined;
  }
};
