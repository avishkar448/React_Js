import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"John"
      }
    }
    
    componentDidMount(){ 
        setInterval(()=>{ 
            this.setState({
                name:"victor"
            })
        },5000)
    }

  render() {
    console.log("....Parent component....")
    return (
        <>
        <h3>This is ParentComponent</h3>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
        <MemoComp name={this.state.name}/>
        </>
    )
  }
}

export default ParentComponent
//