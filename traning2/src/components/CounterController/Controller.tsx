import SuperInputText from "../SuperInput/SuperInputText";
import SuperButton from "../SuperButton/SuperButton";
import React from "react";

type ControllerPropsType = {
  message: string,
  getLocalStorageMaxValue: () => string | number | undefined,
  getLocalStorageStartValue: any,
  getMaxNumber: (value: string) => void,
  onInputFocus: () => void,
  setDisabledButton: (value: boolean) => void,
  getStartNumber: (value: string) => void,
  setLocalStorage: () => void,
  disableBtn: boolean,
  startValue: number,
  maxValue: number
}

export const Controller: React.FC<ControllerPropsType> = (
  {
    message,
    getLocalStorageMaxValue,
    getLocalStorageStartValue,
    getMaxNumber,
    onInputFocus,
    setDisabledButton,
    getStartNumber,
    setLocalStorage,
    disableBtn,
    startValue,
    maxValue
  }
) => {
  return (
    <div className="counter-control">
      <div className="counter-control__list">
        <div className="counter-control__item">
          <label>Max value:</label>
          <SuperInputText
            startValue={startValue}
            maxValue={maxValue}
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
            startValue={startValue}
            maxValue={maxValue}
            defaultValue={getLocalStorageStartValue()}
            getStartNumber={getStartNumber}
            getMaxNumber={getMaxNumber}
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
  )
}
