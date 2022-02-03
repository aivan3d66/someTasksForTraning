import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorage";

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    counter: counterReducer
  }
)

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
  saveState({
    counter: store.getState().counter
  })
})
