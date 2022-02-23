import {useEffect, useState} from "react";

export default  {
  title: 'UseEffect/UseEffect demo',
}

export const UseEffectExample = () => {
  console.log('Ex1');

  // const initValue = useMemo(generateData, []);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('useEffect')
    document.title = counter.toString();
  }, [counter])


  setTimeout(() => {
    console.log('setTimeout')
    document.title = counter.toString();
  }, 2000)

  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1)
    }, 1000)
  })

  return (
    <>
      {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
      {counter}
    </>
  )
}

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1);

  console.log('SetTimeoutExample');

  useEffect(() => {
    console.log('Effect occurred');
  }, []);

  const increase = () => setCounter(counter + 1);

  return (
    <>
      Hello, counter: {counter}
      <button onClick={increase}>
        +
      </button>

    </>
  )
}