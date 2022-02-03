import {Screen} from "./Screen";
import {ControlButtons} from "../CounterController/ControlButtons";
import React from "react";
import {getValueFromLocalStorageTC, setError, setMessage} from "../../bll/counterReducer";
import {useDispatch} from "react-redux";

type CounterPropsType = {
  value: number,
  error: boolean,
  onIncrementHandler: () => void,
}

export const CounterScreen: React.FC<CounterPropsType> = (
  {
    value,
    error,
    onIncrementHandler,
  }
) => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(setError(false));
    dispatch(setMessage(''));
    dispatch(getValueFromLocalStorageTC());
  }

  return (
    <div className="counter-interface">
      <Screen
        startValue={value}
        error={error}
      />
      <ControlButtons
        error={error}
        onIncrementHandler={onIncrementHandler}
        onResetHandler={resetHandler}
        value={value}
      />
    </div>
  )
}
