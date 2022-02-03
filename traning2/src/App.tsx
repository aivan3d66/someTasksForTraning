import React from 'react';
import './App.css';
import {CounterScreen} from "./components/CounterDisplay/CounterScreen";
import {Controller} from "./components/CounterController/Controller";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incCounterValueAC, setError} from "./bll/counterReducer";

export const MESSAGES = {
  INCORRECT_MAX_VALUE_MESSAGE: "Incorrect value, must be > start value",
  INCORRECT_START_VALUE_MESSAGE: "Incorrect value, must be < max value",
  INCORRECT_VALUE_MESSAGE: "Incorrect value, must be > 0",
  ENTER_VALUE_MESSAGE: "Enter values and press 'Set'",
}

function App() {
  const value = useSelector<AppStateType, number>(state => state.counter.value)
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
  const error = useSelector<AppStateType, boolean>(state => state.counter.error)

  const dispatch = useDispatch();

  const incHandler = () => {
    if (value < maxValue) {
      dispatch(incCounterValueAC())
    } else {
      dispatch(setError(true))
    }
  }

  console.log(`${value} - start`)

  return (
    <div className="App">
      <CounterScreen
        value={value}
        error={error}
        onIncrementHandler={incHandler}
      />
      <Controller value={value} maxValue={maxValue}/>
    </div>
  );
}

export default App;
