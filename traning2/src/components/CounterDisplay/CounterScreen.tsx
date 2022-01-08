import {Screen} from "./Screen";
import {ControlButtons} from "../CounterController/ControlButtons";
import React from "react";

type CounterPropsType = {
  startValue: number,
  error: boolean,
  message: string,
  onIncrementHandler: () => void,
  onResetHandler: () => void
}

export const CounterScreen: React.FC<CounterPropsType> = (
  {
    startValue,
    error,
    message,
    onIncrementHandler,
    onResetHandler
  }
) => {
  return (
    <div className="counter-interface">
      <Screen
        startValue={startValue}
        error={error}
        message={message}
      />
      <ControlButtons
        error={error}
        onIncrementHandler={onIncrementHandler}
        onResetHandler={onResetHandler}
        startValue={startValue}
      />
    </div>
  )
}
