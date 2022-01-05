import React from "react";

type ScreenComponentProps = {
  counter: number,
  error: string
}

export const ScreenComponent: React.FC<ScreenComponentProps> = (
  {
    counter,
    error
  }
) => {
  const finalClassName = `${error ? "screenContentRed" : "screenContent"}`

  return (
    <div className={finalClassName}>
      {counter}
      {error && <div className="errorName">{error}</div>}
    </div>
  )
}
