import React, {useState} from 'react';
import './App.css';
import {ControlButtons} from "./components/controlComponent/ControlButtons";
import {ScreenComponent} from "./components/screenComponent/ScreenComponent";
import SuperInputText from "./components/SuperInput/SuperInputText";
import SuperButton from "./components/SuperButton/SuperButton";
import {restoreCounter, saveCounter} from "./components/localStorage";

export type OnIncrementHandler = () => void;
export type OnResetHandler = () => void;

const ERROR_MESSAGE: string = "Достигнуто максимальное число счётчика";
const COUNT_TICK: number = 1;

function App() {
  const [error, setError] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  const setLocalStorage = () => {
    saveCounter("counter-max-value", maxValue)
    saveCounter("counter-start-value", counter)
  }
  const getLocalStorage = () => {
    let valueStart = restoreCounter("counter-start-value", counter);
    setCounter(Number(valueStart))

    let valueMax = restoreCounter("counter-max-value", maxValue);
    setMaxValue(Number(valueMax))
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  console.log(counter);
  console.log(maxValue);

  const onIncrementHandler: OnIncrementHandler = () => {
    if (counter < MAX_COUNT) {
      setCounter(counter + COUNT_TICK);
    } else {
      setError(ERROR_MESSAGE);
    }
  }
  const onResetHandler: OnResetHandler = () => {
    setCounter(0);
    setError("")
  }

  const getMaxNumber = (value: number) => {
    setMaxValue(value);
  }

  const getStartNumber = (value: number) => {
    setCounter(value);
  }

  return (
    <div className="App">
      <ScreenComponent
        counter={counter}
        error={error}
      />
      <ControlButtons
        error={error}
        onIncrementHandler={onIncrementHandler}
        onResetHandler={onResetHandler}
        counter={counter}
      />
    </div>
  );
}

export default App;
