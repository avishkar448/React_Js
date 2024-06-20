import React, { Component } from 'react'

class Custom extends Component {
    constructor(props){ 
        super(props)
        this.state={ 
            msg:"Welcome to ReactJs"
        }
        this.click=this.click.bind(this)
    }
    click(){ 
        this.setState({ 
            msg:"Welcome to our React js tutorial"
        })
    }
    
  render() {
    return (
      <div>
        {/* <p>this is p tag</p>
        <h2>this is h2 tag</h2> */}
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.click()}>change</button>
    
      </div>
    )
  }
}

export default Custom
