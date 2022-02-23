import React from "react";
import {ClockViewPropsType, getCorrectTimeString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  return (
    <>
      <span>{getCorrectTimeString(date.getSeconds())}</span>
      :
      <span>{getCorrectTimeString(date.getMinutes())}</span>
      :
      <span>{getCorrectTimeString(date.getHours())}</span>
    </>
  )
}