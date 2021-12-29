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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
