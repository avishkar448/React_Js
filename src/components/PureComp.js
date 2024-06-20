//import React, { Component } from 'react'
import React,{PureComponent} from 'react'
//import Counter2 from './Counter2'
export class PureComp extends PureComponent {
  render() {
    console.log("This is pure component")
    return (
     <>
        <h3>This is pure Component.......my name is {this.props.name}</h3>
     </>
    )
  }
}

export default PureComp
