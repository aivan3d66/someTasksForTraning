import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

type ScreenComponentProps = {
  startValue: number,
  error: boolean,
}

export const Screen: React.FC<ScreenComponentProps> = ({startValue, error}) => {
  const finalClassName = `${error ? "screenContentRed" : "screenContent"}`
  const message = useSelector<AppStateType, string>(state => state.counter.message)

  return (
    <div className={finalClassName}>
      {message ? <span className="screenMessage">{message}</span> : startValue}
    </div>
  )
}
