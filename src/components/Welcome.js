import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>
        This is Welcome class components
        <h1>Hello, my name is {this.props.name} and I am from {this.props.city}</h1>
      </div>
    )
  }
}

export default Welcome
