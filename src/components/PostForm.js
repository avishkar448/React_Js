import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:' ',
         title:' ',
         body:' '
      }
    }

    changeHandler=(e)=>{ 
        this.setState({ 
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{ 
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(Response=>{ 
          console.log(Response)
        })
        .catch(error=>{ 
          console.log("Somethimg went wromg here")
        })
    }

  render() {
    const {userId,title,body}=this.state
    return (
      <> 
        <div>PostList</div>
        <form onSubmit={this.submitHandler}> 
            <div>
                UserName::
                <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
            </div><br />
            <div>
                Title::
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div><br />
            <div>
                Body::
                <input type="text" name='body' value={body} onChange={this.changeHandler} />
            </div><br />
            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default PostForm
