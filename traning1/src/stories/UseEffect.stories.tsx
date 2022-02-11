import {useEffect, useState} from "react";

export default  {
  title: 'useEffect demo',
}

export const Example2 = () => {
  console.log('Ex1');

  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('useEffect')
    document.title = counter.toString();
  }, [counter])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
    </>
  )
}
