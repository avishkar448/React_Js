import React, { Component } from 'react'

export class ShortCircuit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn:true
      }
    }
    
  render() {
    return this.state.logInn && <h2>Login successfull........!</h2>
  }
}

export default ShortCircuit
