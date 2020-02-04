import React, { Component } from "react";
import Axios from "axios";

class DetailPost extends Component {
  state = {
    post: {
      title: " ",
      body: " "
    }
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
      console.log("result", res);
      this.setState({
          post:{
              title: res.data.title,
              body: res.data.body
          }
      })
    });
  }
  render() {
    return (
      <div>
        <h1>Detail Post</h1>
        <p>{this.state.post.title}</p>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}

export default DetailPost;
