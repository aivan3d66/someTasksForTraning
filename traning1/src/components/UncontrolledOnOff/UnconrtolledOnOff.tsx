import {useState} from "react";

type PropsType = {
  onChange?: (on: boolean) => void,
  defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {
  console.log("onOffRendering");
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

  const onStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    padding: "2px",
    border: "1px solid black",
    backgroundColor: on ? "green" : "white"
  };
  const offStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    padding: "2px",
    border: "1px solid black",
    backgroundColor: on ? "white" : "red"
  };
  const indicatorStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    margin: "0 5px 0 5px",
    border: "1px solid black",
    borderRadius: "50%",
    backgroundColor: on ? "green" : "red"
  };

  return (
    <div className="onOffList__item">
      <button onClick={() => setOn(true)} style={onStyle}>On
      </button>
      <button onClick={() => setOn(false)} style={offStyle}>Off
      </button>
      <div style={indicatorStyle}>*</div>
    </div>
  )
}
