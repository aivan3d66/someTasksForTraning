import React from "react";

type ScreenComponentProps = {
  startValue: number,
  error: boolean,
  message: string,
}

export const Screen: React.FC<ScreenComponentProps> = (
  {
    startValue,
    error,
    message
  }
) => {
  const finalClassName = `${error ? "screenContentRed" : "screenContent"}`

  return (
    <div className={finalClassName}>
      {message ? <span className="screenMessage">{message}</span> : startValue}
    </div>
  )
}
