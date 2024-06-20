import React, { Component } from 'react'

export class ExampleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:[]
      }
      this.myRef=React.createRef()
    }
    
    componentDidMount(){ 
        this.setState({message:['Hello World....!']})
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        if(snapShot!=null){ 
            console.log('snapShot :',snapShot);
            this.myRef.current.scrollTop=snapShot;
        }
     }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ExampleComponent
