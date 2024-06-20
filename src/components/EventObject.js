import React from 'react'

function EventObject() {
    const clickHandler=(a,b)=>{ 
        alert(b.type)
        //console.log(b)
    }
  return (
    <>
        <div>
            EventObject
        </div>
        <button onMouseEnter={(Event)=>clickHandler("Goal",Event)}>Take a shot</button>
    </>
  )
}

export default EventObject