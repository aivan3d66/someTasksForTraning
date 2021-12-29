import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
  // component: input,
}

export const UncontrolledInput = () => <input/>
export const TrackValueUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value;
    setValue(actualValue);
  }

  return (
    <>
      <input onChange={inputOnChange}/> - {value}
    </>
  )
}

export const TrackValueUncontrolledInputBtn = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return (
    <>
      <input ref={inputRef} id={"inputId"}/>
      <button onClick={save}>
        Save
      </button>
      actual value - {value}
    </>
  )
}
