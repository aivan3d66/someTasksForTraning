import SuperInputText from "../SuperInput/SuperInputText";
import SuperButton from "../SuperButton/SuperButton";
import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setMaxCounterValueAC, setMessage, setStartCounterValueAC} from "../../bll/counterReducer";
import {saveState} from "../../utils/localStorage";
import { store } from "../../bll/store";
import {MESSAGES} from "../../App";

type ControllerPropsType = {
  value: number,
  maxValue: number
}

export const Controller: React.FC<ControllerPropsType> = ({value, maxValue}) => {
  const dispatch = useDispatch();

  console.log(`${maxValue} - max`)

  const onMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxCounterValueAC(+e.currentTarget.value))
  }

  const onStartNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartCounterValueAC(+e.currentTarget.value))
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

  return (
    <div className="counter-control">
      <div className="counter-control__list">
        <div className="counter-control__item">
          <label>Max value:</label>
          <SuperInputText
            defaultValue={maxValue}
            onChange={onMaxNumberHandler}
            onFocus={onFocusMessage}
          />
        </div>
        <div className="counter-control__item">
          <label>Start value:</label>
          <SuperInputText
            onChange={onStartNumberHandler}
            defaultValue={value}
            onFocus={onFocusMessage}
          />
        </div>
      </div>
      <div className="counter-control__btn">
        <SuperButton
          onClick={onSetValuesToLocalStorage}
          // disabled={disableBtn}
        >
          Set
        </SuperButton>
      </div>
    </div>
  )
}
