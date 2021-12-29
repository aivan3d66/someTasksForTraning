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
  const finalClassName = `${error ? "screenContentRed" : "screenContent"}`

  return (
    <div className={finalClassName}>
      Counter: {screenValue}
      {error && <div className="errorName">{error}</div>}
    </div>
  )
}
