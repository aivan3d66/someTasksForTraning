import React, {useMemo, useState} from "react";

export default {
  title: 'useMemo'
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState<number>(3)
  const [b, setB] = useState<number>(3)

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 1000000) {
        fake++
        const fakeValue = Math.random()
      }

      tempResA = tempResA * i
    }
    return tempResA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
      <hr/>
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </>
  )
}

const UsersSecret = (props: { users: Array<string> }) => {
  return (
    <div>
      {
        props.users.map((u, i) => <div key={i}>{u}</div>)
      }
    </div>
  )
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
  const [counter, setCounter] = useState<number>(0)
  const [users, setUsers] = useState(['Geralt', 'Tris', 'Jaskier'])

  const newArray = useMemo(() => {
    const newArray = users.filter(u => u.toLowerCase().indexOf("g") > -1)
    return newArray;
  }, [users])

  const addUser = () => {
    const newUser = [...users, 'GYen ' + new Date().getTime()];
    setUsers(newUser);
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => addUser()}>add user</button>
      {counter}
      <Users users={newArray}/>
    </>
  )
}
