import React from 'react'

function Greet(props) {
  return (
    <div>
      <h2>My name is  {props.name} and myskill is {props.skill}</h2>
      {props.children}
    </div>
  )
}

export default Greet
