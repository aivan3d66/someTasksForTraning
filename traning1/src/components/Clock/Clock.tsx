import React, {useEffect, useState} from "react";

type PropsType = {
  mode: "digital" | "analog",
}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    }
  }, [])

  const getCorrectTimeString = (number: number) => number < 10 ? '0' + number : number

  const secondsString = getCorrectTimeString(date.getSeconds());
  const minutesString = getCorrectTimeString(date.getMinutes());
  const hoursString = getCorrectTimeString(date.getHours());

  let view;
  switch (props.mode) {
    case 'analog':
      view = <AnalogClockView date={date}/>
      break;
    case 'digital':
    default:
      view = <DigitalClockView date={date}/>
  }

  return (
    <div>
      {view}
    </div>
  )
}

type ClockViewPropsType = {
  date: Date
}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
  const getCorrectTimeString = (number: number) => number < 10 ? '0' + number : number
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
export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
  return (
    <span>
      Analog clock
    </span>
  )
}