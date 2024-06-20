import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn:true
      }
    }

  render(){
    return (this.state.logInn)?<h2>User TernaryOperator Statement</h2>: <h2>Hello TerneryOperator</h2>
    
  }
}

export default TernaryOperator
