import React from 'react'
import { useCount } from '../context/CountContext'

const CounterConst = () => {
    const {count,counter,counterSub}=useCount()
  return (
    <div>
      <h2>Count: {count}</h2><br />
      <button onClick={counter}>click</button>
      <button onClick={counterSub}>click</button>
    </div>
  )
}

export default CounterConst