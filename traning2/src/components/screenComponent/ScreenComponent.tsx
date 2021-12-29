import React from "react";

type ScreenComponentProps = {
  screenValue: number,
  error: string
}

export const ScreenComponent: React.FC<ScreenComponentProps> = (
  {
    screenValue,
    error
  }
) => {
  return (
    <div className="screenContent">
      <div>
        Counter: {screenValue}
      </div>
      {error && <div className="errorName">{error}</div>}
    </div>
  )
}
