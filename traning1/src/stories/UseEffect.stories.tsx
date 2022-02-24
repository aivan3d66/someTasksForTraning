import {useEffect, useState} from "react";

export default {
  title: 'Use Effect/UseEffect demo',
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

    return () => {
      console.log('RESET EFFECT')
    }
  }, [counter]);

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

export const KeysTrackerExample = () => {
  const [text, setText] = useState('');

  console.log('Component rendered with ' + text);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setText((state) => state + e.key);
    }
    window.document.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text]);

  return (
    <>
      Typed text: {text}
    </>
  )
}