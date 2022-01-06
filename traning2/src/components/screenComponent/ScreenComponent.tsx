import React from "react";

type ScreenComponentProps = {
  counter: number,
  error: boolean,
  message: string,
}

export const ScreenComponent: React.FC<ScreenComponentProps> = (
  {
    counter,
    error,
    message
  }
) => {
  const finalClassName = `${error ? "screenContentRed" : "screenContent"}`

  return (
    <div className={finalClassName}>
      {message ? <span className="screenMessage">{message}</span>  : counter}
      {error && <div className="errorName">{error}</div>}
    </div>
  )
}
