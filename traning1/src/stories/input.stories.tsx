import React, {ChangeEvent, useRef, useState} from "react";
import {on} from "cluster";

export default {
  title: 'input',
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfControlledInput = () => {
  const [value, setValue] = useState("")
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  return (
    <div>
      <input onChange={onChangeHandler}/> - {value}
    </div>
  )
}

export const GetValueOfControlledInputByPressBtn = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onSaveHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value);
  }

  return (
    <div>
      <input ref={inputRef}/><button onClick={onSaveHandler}>save</button> - {value}
    </div>
  )
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("")

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue((e.currentTarget.value))
  }
  return (
    <div>
      <input value={parentValue} onChange={onChangeHandler}/>
    </div>
  )
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue((e.currentTarget.checked))
  }
  return (
    <div>
      <input type={"checkbox"} onChange={onChangeHandler} checked={parentValue}/>
    </div>
  )
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2")

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return (
    <div>
      <select value={parentValue} onChange={onChangeHandler}>
        <option value="1">minsk</option>
        <option value="2">moskow</option>
        <option value="3">kiev</option>
      </select>
    </div>
  )
}
