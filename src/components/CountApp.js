import React ,{useState,useEffect} from 'react'

function CountApp() {
    const [count,setCount]=useState(0)
    useEffect(()=>{ 
        document.title=`User clicked ${count} times`
        
    })
  return (
    <>
        <div>CountApp</div>
        <h4>User click on button for {count} times</h4>

        <button onClick={()=>setCount (count+1)}>Count {count}</button>
    </>
  )
}

// useRef --> create multiple object
// useReducer --> use to manage state
//useMemo-->  use to declear size according to memo
//useCallback
//useDebugeValue
//useImparative 
export default CountApp

