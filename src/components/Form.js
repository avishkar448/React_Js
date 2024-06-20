import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:" ",
         comment:" ",
         graduation:" z"
      }
    }

    handleuserName=(event)=>{ 
        this.setState({
            username:event.target.value
        })
    }

    handleComment=(event)=>{ 
        this.setState({ 
            comment:event.target.value
        })
    }

    handleGrade=(event)=>{ 
        this.setState({ 
            graduation: event.target.value 
        })
    }

    handleSubmit=(event)=>{ 
        alert(`${this.state.username} ${this.state.comment} ${this.state.graduation}`)

        event.preventDefault()
    }
    
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit()}>
            
            <div>Form</div>
            <div>
            <label htmlFor="">username: </label>
            <input type="text" value={this.state.username} onChange={this.handleuserName}/>
            </div>
            <br /><br />
            <div>
                <label htmlFor="">Text Area</label>
                <textarea type="text" name="" id="" value={this.state.comment} onChange={this.handleComment}></textarea>
            </div>
            <br /><br />
            <div>
                <label htmlFor="">Graduation</label>
                <select name="" id="" value={this.state.graduation} onChange={this.handleGrade}> 
                    <option value="BE">BE</option>
                    <option value="Btech">Btech</option>
                    <option value="ME">ME</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                </select>
            </div>
            <br /><br />

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default Form
