import React, { Component } from 'react'
import axios from 'axios'
export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       errorMsg:" "
    }
  }
  
  componentDidMount(){ 
    axios.get("https://jsonplaceholder.typicode.com/posts")

    .then(Response =>{ 
      this.setState({posts:Response.data})
    })
    .catch(error =>{ 
      this.setState({errorMsg:"Something went wrong!!!"})
    })
  }

  render() {
    const {posts,errorMsg}=this.state
    return (
      <div>
        <h1>Post List </h1>
        {posts.length ? posts.map(post => <h4 key={post.id}>{post.title}</h4>):null}

        {errorMsg ?<h2>{errorMsg}</h2>:null}
      </div>
    )
  }
}

export default PostList
