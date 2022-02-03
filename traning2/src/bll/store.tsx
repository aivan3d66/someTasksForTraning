import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState} from "../utils/localStorage";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    counter: counterReducer
  }
)

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
