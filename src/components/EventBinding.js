import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Hello"
      }
    // console.log(this.state.msg)
    }
    
    clickHandler(){

        this.setState({ 
            msg:"This is first"
        })
    }
    
  render() {
    

    return (
      <>
      <div>
        {this.state.msg}
      </div>
      <button onClick={()=>{this.clickHandler()}}>Click me </button>
      </>
    )
  }
}

export default EventBinding
