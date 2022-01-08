import SuperButton from "../SuperButton/SuperButton";
import React from "react";
import {OnIncrementHandler, OnResetHandler} from "../../App";

type ControlButtonsProps = {
  onIncrementHandler: OnIncrementHandler,
  onResetHandler: OnResetHandler,
  error: boolean,
  startValue: number
}

export const ControlButtons: React.FC<ControlButtonsProps> = (
  {
    onIncrementHandler,
    onResetHandler,
    error,
    startValue
  }
) => {

  return (
    <div className="btnWrapper">
      <SuperButton
        onClick={onIncrementHandler}
        disabled={error}
      >
        inc
      </SuperButton>
      <SuperButton
        onClick={onResetHandler}
        disabled={startValue === 0}
      >
        reset
      </SuperButton>
    </div>
  )
}
