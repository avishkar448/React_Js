import React from 'react'


function ChildComponent(props) {
  return (
    <>
    <div>
        Child Component
    </div>
    {/* <button onClick={this.props.Parenthandler={this:parentOne}}>Click me</button> */}

    {/* <button onClick={this.props.Parenthandler()}>Click me</button> */}
    <button onClick={props.Parenthandler}>click</button>
    </>
  )
}

export default ChildComponent
