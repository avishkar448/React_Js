import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:"Avishkar"
      }
      this.parentOne=this.parentOne.bind(this)
    }

    parentOne(childdata){
        alert(`Hello ${this.state.ParentName}`)
       // alert(`Hello ${this.state.ParentName} from ${childdata}`)
    }
    
  render() {
    return (
      <>
        <div>
           Parent Component 
           <ChildComponent Parenthandler={this.parentOne}/>
        </div>
      </>
    )
  }
}

export default ParentComponent
