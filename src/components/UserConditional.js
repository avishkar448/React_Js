import React, { Component } from 'react'

class UserConditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
        logInn:false
      }
    }
    
  render() {
    if(this.state.logInn){ 
        return <div>User Conditional Statement</div>
    }
    else{
        return <div>Hello World...!</div> 
    }
    // return (
    //   <div>
        
    //   </div>
    // )
  }
}

export default UserConditional
