import {useState} from "react";

export default  {
  title: 'useState demo',
}

const generateData = () => {
  console.log('generate data')
  return 1
}

export const Example1 = () => {
  console.log('Ex1');

  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(generateData);
  const changer = (state: number) => state + 1;

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </>
  )
}
