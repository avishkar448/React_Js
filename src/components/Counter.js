import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){ 
        super(props)
        this.state={
            count:0
        }
    }
    Countdown(){ 
        this.setState({
            count:this.state.count +1
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <>
        <h3>Counter- {this.state.count}</h3>
        <button onClick={()=>this.Countdown()}>Increment</button>
      </>
    )
  }
}

export default Counter
