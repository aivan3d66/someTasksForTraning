import SuperButton from "../SuperButton/SuperButton";
import React from "react";

type ControlButtonsProps = {
  onIncrementHandler: () => void,
  onResetHandler: () => void,
  error: boolean,
}

export const ControlButtons: React.FC<ControlButtonsProps> = (
  {
    onIncrementHandler,
    onResetHandler,
    error,
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
      >
        reset
      </SuperButton>
    </div>
  )
}
