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
      view = <span>ANALOG</span>
      break;
    case 'digital':
    default:
      view = <>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
      </>
  }

  return (
    <div>
      {view}
    </div>
  )
}
