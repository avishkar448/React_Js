import React, { Component } from 'react'
import LifeCyle1 from './LifeCycle1'
export class LifeCyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Victor"
      }
      console.log("Life cycle constructor")
    }

    static getDrivedStateFromPrpops(props,state){ 
        console.log("life cyle........!!!")

        return null;
    }
    componentDidMount(){ 
        console.log("Life cycle componentdidmount method")
    }
    
  render() {
    console.log("Life cycle render method ")
    return (
      <>
      <div>
        Lifecycle
      </div>
      <LifeCyle1/>
      </>
    )
  }
}

export default LifeCyle
