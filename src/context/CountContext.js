import {createContext,useState,useContext} from 'react'

export const CountContext=createContext()

export const CountProvider=({children})=>{ 
    const [count,setCount]=useState(0)

    const counter=()=>{ 
       const add = count +1
       setCount(add)
    }

    const counterSub=()=>{ 
        const sub= count -1
        setCount(sub)
    }

    return(
        <CountContext.Provider value={{count,counter,counterSub}}>
            {children}
        </CountContext.Provider>
    )
}

export const useCount=()=>{ 
    return useContext(CountContext)
}

