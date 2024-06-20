import React, { Component } from 'react'

class ClassArray extends Component {
  render() {
    const colors=['red','blue','yellow']
    const [firstColor,secondColor,thirdColor]=colors
    return (
      <div>
        <h2>a:{firstColor}</h2>
        <h2>b:{secondColor}</h2>
        <h2>c:{thirdColor}</h2>
      </div>
    )
  }
}

export default ClassArray