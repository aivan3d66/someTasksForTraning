import SuperInputText from "../SuperInput/SuperInputText";
import SuperButton from "../SuperButton/SuperButton";
import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setError, setMaxCounterValueAC, setMessage, setStartCounterValueAC} from "../../bll/counterReducer";
import {loadState, saveState} from "../../utils/localStorage";
import { store } from "../../bll/store";
import {MESSAGES} from "../../App";

type ControllerPropsType = {
  value: number,
  maxValue: number
}

export const Controller: React.FC<ControllerPropsType> = ({value, maxValue}) => {
  const dispatch = useDispatch();
  const [red, setRed] = useState<boolean>(false);

  console.log(`${maxValue} - max`)

  const onMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value < 0) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_VALUE_MESSAGE))
    } else if (+e.currentTarget.value <= value) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_MAX_VALUE_MESSAGE))
    }  else {
      setRed(false)
      dispatch(setError(false))
      dispatch(setMessage(MESSAGES.ENTER_VALUE_MESSAGE))
    }
    dispatch(setMaxCounterValueAC(+e.currentTarget.value));
  }

  const onStartNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value < 0) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_VALUE_MESSAGE))
    } else if (+e.currentTarget.value >= maxValue) {
      setRed(true)
      dispatch(setError(true))
      dispatch(setMessage(MESSAGES.INCORRECT_START_VALUE_MESSAGE))
    }  else {
      setRed(false)
      dispatch(setError(false))
      dispatch(setMessage(MESSAGES.ENTER_VALUE_MESSAGE))
    }
    dispatch(setStartCounterValueAC(+e.currentTarget.value));
  }

  const onSetValuesToLocalStorage = () => {
    dispatch(setMessage(''))
    saveState({
      counter: store.getState().counter
    })
  }

  const onFocusMessage = () => {
    dispatch(setMessage(MESSAGES.ENTER_VALUE_MESSAGE))
  }

  const getDefaultStartValue = () => {
    return loadState().counter.value
  }

  const getDefaultMaxValue = () => {
    return loadState().counter.maxValue
  }

  const setDisabled = () => {
    return loadState().counter.value === value && loadState().counter.maxValue === maxValue;
  }

  return (
    <div className="counter-control">
      <div className="counter-control__list">
        <div className="counter-control__item">
          <label>Max value:</label>
          <SuperInputText
            defaultValue={getDefaultMaxValue()}
            onChange={onMaxNumberHandler}
            onFocus={onFocusMessage}
            red={red}
          />
        </div>
        <div className="counter-control__item">
          <label>Start value:</label>
          <SuperInputText
            onChange={onStartNumberHandler}
            defaultValue={getDefaultStartValue()}
            onFocus={onFocusMessage}
            red={red}
          />
        </div>
      </div>
      <div className="counter-control__btn">
        <SuperButton
          onClick={onSetValuesToLocalStorage}
          disabled={setDisabled()}
        >
          Set
        </SuperButton>
      </div>
    </div>
  )
}
