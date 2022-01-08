import SuperInputText from "../SuperInput/SuperInputText";
import SuperButton from "../SuperButton/SuperButton";
import React from "react";

type ControllerPropsType = {
  message: string,
  getLocalStorageMaxValue: any,
  getLocalStorageStartValue: any,
  getMaxNumber: any,
  onInputFocus: any,
  setDisabledButton: any,
  getStartNumber: any,
  setLocalStorage: any,
  disableBtn: any,
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
  }
) => {
  return (
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
  )
}
