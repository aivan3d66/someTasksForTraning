import React, {useEffect, useState} from 'react';
import './App.css';
import {restoreCounter, saveCounter} from "./components/localStorage";
import {CounterScreen} from "./components/CounterDisplay/CounterScreen";
import {Controller} from "./components/CounterController/Controller";

export type OnIncrementHandler = () => void;
export type OnResetHandler = () => void;

export const INCORRECT_MAX_VALUE_MESSAGE: string = "Incorrect value, must be > start value";
export const INCORRECT_START_VALUE_MESSAGE: string = "Incorrect value, must be < max value";
const INCORRECT_VALUE_MESSAGE: string = "Incorrect value, must be > 0";
const ENTER_VALUE_MESSAGE: string = "Enter values and press 'Set'";
const COUNT_TICK: number = 1;

function App() {
  const [error, setError] = useState<boolean>(false);
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [disableBtn, setDisableBtn] = useState<boolean>(true)

  const setLocalStorage = () => {
    saveCounter("counter-max-value", maxValue)
    saveCounter("counter-start-value", startValue)
    setMessage("")
    setDisableBtn(true);
  }
  const getLocalStorage = () => {
    let valueStart = restoreCounter("counter-start-value", startValue);
    setStartValue(valueStart);

    let valueMax = restoreCounter("counter-max-value", maxValue);
    setMaxValue(valueMax);
  }
  const getLocalStorageStartValue = () => {
    return restoreCounter("counter-start-value", startValue);
  }
  const getLocalStorageMaxValue = () => {
    return restoreCounter("counter-max-value", maxValue);
  }

  useEffect(() => {
    getLocalStorage()
  }, [setStartValue, setMaxValue])

  const onIncrementHandler: OnIncrementHandler = () => {
    if (startValue < maxValue) {
      setStartValue(+startValue + COUNT_TICK);
    } else {
      setError(true);
    }
  };
  const onResetHandler: OnResetHandler = () => {
    getLocalStorage();
    setError(false);
    setMessage("");
  };
  const getMaxNumber = (value: string) => {
    if (+value <= startValue) {
      setError(true)
      setMessage(INCORRECT_MAX_VALUE_MESSAGE);
    } else {
      setError(false)
      setMessage(ENTER_VALUE_MESSAGE);
      setMaxValue(+value);
    }
  };
  const getStartNumber = (value: string) => {
    if (+value < 0) {
      setError(true)
      setMessage(INCORRECT_VALUE_MESSAGE)
    } else if (+value >= maxValue) {
      setError(true)
      setMessage(INCORRECT_START_VALUE_MESSAGE)
    } else {
      setError(false)
      setMessage(ENTER_VALUE_MESSAGE);
      setStartValue(+value);
    }
  };
  const onInputFocus = () => {
    setMessage(ENTER_VALUE_MESSAGE)
  };
  const setDisabledButton = (value: boolean) => setDisableBtn(value);

  return (
    <div className="App">
      <CounterScreen
        startValue={startValue}
        error={error}
        message={message}
        onIncrementHandler={onIncrementHandler}
        onResetHandler={onResetHandler}
      />
      <Controller
        startValue={startValue}
        message={message}
        maxValue={maxValue}
        getLocalStorageMaxValue={getLocalStorageMaxValue}
        getLocalStorageStartValue={getLocalStorageStartValue}
        getMaxNumber={getMaxNumber}
        onInputFocus={onInputFocus}
        setDisabledButton={setDisabledButton}
        getStartNumber={getStartNumber}
        setLocalStorage={setLocalStorage}
        disableBtn={disableBtn}
      />
    </div>
  );
}

export default App;
