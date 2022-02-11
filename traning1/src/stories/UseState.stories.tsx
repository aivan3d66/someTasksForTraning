import {useMemo, useState} from "react";

export default  {
  title: 'useState demo',
}

const generateData = () => {
  console.log('generate data')
  return 123124124
}

export const Example1 = () => {
  console.log('Ex1');

  const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(initValue);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
    </>
  )
}
