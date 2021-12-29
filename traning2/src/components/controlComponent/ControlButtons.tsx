import SuperButton from "../SuperButton/SuperButton";
import React from "react";
import {OnIncrementHandler, OnResetHandler} from "../../App";

type ControlButtonsProps = {
  onIncrementHandler: OnIncrementHandler,
  onResetHandler: OnResetHandler,
  error: string,
  counter: number
}

export const ControlButtons: React.FC<ControlButtonsProps> = (
  {
    onIncrementHandler,
    onResetHandler,
    error,
    counter
  }
) => {

  return (
    <div className="btnWrapper">
      <SuperButton
        onClick={onIncrementHandler}
        disabled={!!error}
      >
        inc
      </SuperButton>
      <SuperButton
        onClick={onResetHandler}
        disabled={counter === 0}
      >
        reset
      </SuperButton>
    </div>
  )
}
