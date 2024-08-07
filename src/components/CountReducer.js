import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addCount,subCount } from '../features/count/countSlice'

const CountReducer = () => {
    const count=useSelector((state)=> state.counter.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> dispatch(addCount())}>add</button>
      <button onClick={()=> dispatch(subCount())}>sub</button>
    </div>
  )
}

export default CountReducer
