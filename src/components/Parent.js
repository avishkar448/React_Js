import React, {
    useReducer,
    useMemo,
    useCallback,
    useLayoutEffect,
    useDebugValue,
    useRef,
    useImperativeHandle,
    forwardRef
  } from "react";
  
   const reducer=(state,action)=>{ 
      switch(action.type){ 
          case 'INCREMENT':
              return{count :state.count + 1}
          
          case 'DECREMENT':
              return{count: state.count - 1}
          
          default :
              return state;
      }
   }
  
   const ChildComponent=forwardRef(({onButtonClick},ref)=>{ 
      const handleClick=useCallback(()=>{ 
          onButtonClick('Button click in ChildComponent')
      },[onButtonClick]);
  
      useImperativeHandle(ref,()=>({ 
          triggerButtonClick:handleClick,
      }),[handleClick])
  
      return( 
          <button onClick={handleClick}>Click me </button>
      )
   })
  
   //parent Component
  
  const ParentComponents=()=>{ 
      const[state,dispatch]=useReducer(reducer,{count:0});
  
      const memosizeValue=useMemo(()=>{
          return state.count%2==0 ?"Even" : "Odd";
      },[state.count])
  
  const increment=useCallback(()=>{ 
      dispatch({type:'INCREMENT'})
  },[])
  
  const decrement=useCallback(()=>{ 
      dispatch({type:'DECREMENT'})
  },[])
  
  const countRef=useRef(state.count);
  
  useLayoutEffect(()=>{ 
      countRef.current=state.count;
  },[state.count])
  }
  
function Parent() {
  return (
    <div>Parent</div>
  )
}

export default Parent