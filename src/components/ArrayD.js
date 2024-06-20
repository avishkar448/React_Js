import React from 'react'

function ArrayD() {
    const colors=['red','green','blue']

    const [firstColor,secondColor,thirdColor]=colors
  return (
<>
    <div>
        <div>This is Array Destructing in functional based component</div>
    </div>
    <h1>FirstColor:{firstColor}</h1>
    <h1>secondColor:{secondColor}</h1>
    <h1>thiredColor:{thirdColor}</h1>
</>
  )
}

export default ArrayD