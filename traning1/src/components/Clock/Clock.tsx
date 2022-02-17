import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  })

  const getCorrectTimeString = (number: number) =>  number < 10 ? '0' + number : number

  const secondsString = getCorrectTimeString(date.getSeconds());
  const minutesString = getCorrectTimeString(date.getMinutes());
  const hoursString = getCorrectTimeString(date.getHours());

  return (
    <div>
      <span>{hoursString}</span>
      :
      <span>{minutesString}</span>
      :
      <span>{secondsString}</span>
    </div>
  )
}
