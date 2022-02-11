import {useState} from "react";

export default  {
  title: 'useState demo',
}

export const Example2 = () => {
  console.log('Ex1');

  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(0);
  const changer = (state: number) => state + 1;

  return (
    <>
      <button onClick={() => setCounter(changer)}>+</button>
      {counter}
    </>
  )
}
