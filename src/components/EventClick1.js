import React from 'react'

function EventClick1() {
    const clickHandler=(a)=>{ 
        alert(a)
    }
  return (
    <>
    <div>
        Passing argument in Event 
    </div>
    <button onClick={()=> clickHandler("Avishkar")}>Take a shot</button>
    </>
  )
}

export default EventClick1