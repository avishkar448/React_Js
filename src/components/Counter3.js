import React from "react";
import {connect } from 'react-redux'

const counter=({counter,increment,decerment})=>{ 
    return ( 
        <div>
            <h2>Counter:{counter}</h2>
            <button className="bg-primary" onClick={increment}>increment</button>

            <button className="bg-danger" onClick={decerment}>decerment</button>


        </div>
    )
}

const mapstateToProps=(state)=>{ 
    return{ 
        counter:state.counter
  }
}

const mapDispatchToProps=(dispatch)=>{ 
    return{ 
        increment:()=>{ 
            dispatch({type:`INCREMENT`})
        },
        decerment:()=>{ 
            dispatch({type:`DECREMENT`})
        }
    }
}

export default connect(mapstateToProps,mapDispatchToProps)(counter)