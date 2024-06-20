import React, { Component } from 'react'

export class Message extends Component {
  render() {
    const{name,courseName}=this.props
    return (
      <div>
        I am the GOAT 

        <h2>Hello my name is {name} and my course name is {courseName}</h2>
      </div>
    )
  }
}

export default Message
