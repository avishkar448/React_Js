import React, { Component } from 'react'

export class ClassEvent extends Component {
     ClickHandler() {
        console.log("User click on button");
      }
  render() {
    return (
        <>
        <div>
          EventClick
        </div>
        <button onClick={this.ClickHandler}>Click Me</button>
      </>
    )
  }
}

export default ClassEvent
