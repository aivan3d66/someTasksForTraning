import React, {useEffect, useState} from 'react';
import './App.css';
import {ControlButtons} from "./components/ControlComponent/ControlButtons";
import {ScreenComponent} from "./components/ScreenComponent/ScreenComponent";
import SuperInputText from "./components/SuperInput/SuperInputText";
import SuperButton from "./components/SuperButton/SuperButton";
import {restoreCounter, saveCounter} from "./components/localStorage";

export type OnIncrementHandler = () => void;
export type OnResetHandler = () => void;

const INCORRECT_VALUE_MESSAGE: string = "Incorrect value, must be > 0";
export const INCORRECT_MAX_VALUE_MESSAGE: string = "Incorrect value, must be > start value";
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
      <div className="counter-interface">
        <ScreenComponent
          counter={startValue}
          error={error}
          message={message}
        />
        <ControlButtons
          error={error}
          onIncrementHandler={onIncrementHandler}
          onResetHandler={onResetHandler}
          counter={startValue}
        />
      </div>
      <div className="counter-control">
        <div className="counter-control__list">
          <div className="counter-control__item">
            <label>Max value:</label>
            <SuperInputText
              message={message}
              defaultValue={getLocalStorageMaxValue()}
              getMaxNumber={getMaxNumber}
              onFocus={onInputFocus}
              setDisabledButton={setDisabledButton}
            />
          </div>
          <div className="counter-control__item">
            <label>Start value:</label>
            <SuperInputText
              message={message}
              defaultValue={getLocalStorageStartValue()}
              getStartNumber={getStartNumber}
              onFocus={onInputFocus}
              setDisabledButton={setDisabledButton}
            />
          </div>
        </div>
        <div className="counter-control__btn">
          <SuperButton
            onClick={setLocalStorage}
            disabled={disableBtn}
          >
            Set
          </SuperButton>
        </div>
      </div>
    </div>
  );
}

export default App;
