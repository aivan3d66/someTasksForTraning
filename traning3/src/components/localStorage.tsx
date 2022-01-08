export const saveCounter = (key: string, state: number) => {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}

export const restoreCounter = (key: string, defaultState: number) => {
  let state = defaultState;
  const stringState = localStorage.getItem(key);
  if (stringState !== null) state = JSON.parse((stringState));
  return state
}
