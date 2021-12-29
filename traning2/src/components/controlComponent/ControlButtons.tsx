import SuperButton from "../SuperButton/SuperButton";
import React from "react";

type ControlButtonsProps = {
  onIncrementHandler: () => void,
  onResetHandler: () => void,
  error: string,
  screenValue: number
}

export const ControlButtons: React.FC<ControlButtonsProps> = (
  {
    onIncrementHandler,
    onResetHandler,
    error,
    screenValue
  }
) => {
  return (
    <div className="btnWrapper">
      <SuperButton
        onClick={onIncrementHandler}
        error={error}
        disabled={!!error}
      >
        inc
      </SuperButton>
      <SuperButton
        onClick={onResetHandler}
        disabled={screenValue === 0}
      >
        reset
      </SuperButton>
    </div>
  )
}
