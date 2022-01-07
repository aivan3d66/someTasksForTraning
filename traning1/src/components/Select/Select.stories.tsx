import React, {useState} from 'react';
import {SelectInput} from "./Select";

export default {
  title: 'components/Select stories',
  component: SelectInput,
}

export const BaseExample = () => {
  const [value, setValue] = useState("2")
  return (
    <>
      <SelectInput
        value={value}
        onChange={setValue}
        items={[
          {value: "1", title: "Minsk"},
          {value: "2", title: "Vitebsk"},
          {value: "3", title: "Brest"}
        ]}
      />
    </>
  )
}


export const BaseExampleWithoutValue = () => {
  const [value, setValue] = useState(null)
  return (
    <>
      <SelectInput
        value={value}
        onChange={setValue}
        items={[
          {value: "1", title: "Minsk"},
          {value: "2", title: "Vitebsk"},
          {value: "3", title: "Brest"}
        ]}
      />
    </>
  )
}




