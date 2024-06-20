import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        logInn:false
      }
    }
    
  render() {
    let text;
    if(this.state.logInn){ 
        text=<h2>User Conditional Statement</h2>
    }
    else{ 
        text=<h2>Hello world</h2>
    }
    return (
      <>
        <h1>{text}</h1>
      </>
    )
  }
}

export default ElementVariable
