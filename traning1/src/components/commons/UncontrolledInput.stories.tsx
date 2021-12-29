import React, {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'input',
  // component: input,
}

export const UncontrolledInput = () => <input/>;

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
};

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
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <input value={parentValue} onChange={onChange}/>;
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type="checkbox" onChange={onChange} checked={parentValue}/>;
}

export const ControlledSelect= () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue}>
    <option>none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Moskow</option>
    <option value={"3"}>Kiev</option>
  </select>
}
