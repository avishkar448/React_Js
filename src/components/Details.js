import React from 'react'

function Details() {
    const name1=["Avishkar","Ashok","Abhay"]
  return (
    <> 
        <div>Details</div>
        <h3>{name1[0]}</h3>
        <h3>{name1[1]}</h3>
        <h3>{name1[2]}</h3>   
    </>
  )
}

export default Details