import React from "react";

type OnOffProps = {
  on: boolean,
}

export const OnOff: React.FC<OnOffProps> = (
  {
    on
  }
) => {
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
      <button onClick={() => on} style={onStyle}>On
      </button>
      <button onClick={() => !on} style={offStyle}>Off
      </button>
      <div style={indicatorStyle}>*</div>
    </div>
  )
}
