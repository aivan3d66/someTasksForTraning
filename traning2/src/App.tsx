import React, {useState} from 'react';
import './App.css';
import {ControlButtons} from "./components/controlComponent/ControlButtons";
import {ScreenComponent} from "./components/screenComponent/ScreenComponent";

const ERROR_MESSAGE = "Достигнуто максимальное чисто счётчика"

function App() {
  const [screenValue, setScreenValue] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const onIncrementHandler = () => {
    if (screenValue < 5) {
      setError("")
      setScreenValue(screenValue + 1);
    } else {
      setError(ERROR_MESSAGE);
    }
  }

  const onResetHandler = () => {
    setScreenValue(0);
    setError("")
  }

  return (
    <div className="App">
      <ScreenComponent
        screenValue={screenValue}
        error={error}
      />
      <ControlButtons
        error={error}
        onIncrementHandler={onIncrementHandler}
        onResetHandler={onResetHandler}
        screenValue={screenValue}
      />
    </div>
  );
}

export default App;
