import React, { Component, Fragment } from "react";
import PostComponent from "../../component/Post/PostComponent";
import Axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1
    },
    isUpdate: false,
  };

  handleRemove = data => {
    fetch(`http://localhost:3004/posts/${data}`, {
      method: "DELETE"
    })
      .then(() => {
        this.getPostAPI();
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleUpdate = data => {
    this.setState({
        formBlogPost: data,
        isUpdate: true,
    })
    // Axios.put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost).then((res)=> {
    //     console.log('res', res);
    //     this.getPostAPI();

    // }, (err) => {
    //     console.log('err', err)
    // })
  };

  handleFormChange = event => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;
    let timestamp = new Date().getTime();
    if(!this.state.isUpdate){
        formBlogPostNew["id"] = timestamp;
    }
    this.setState(
      {
        formBlogPost: formBlogPostNew
      },
      () => {
        console.log("object", this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
      if(this.state.isUpdate){
        this.putDataToAPI();
      }
      else{
        this.postDataToAPI();
      }
    
  };

  getPostAPI = () => {
    Axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then(
      result => {
        this.setState({
          post: result.data
        });
      }
    );
  };

  postDataToAPI = () => {
    Axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      res => {
        console.log("res", res);
        this.getPostAPI();
        this.setState({
            formBlogPost: {
                id: 1,
                title: "",
                body: "",
                userId: 1
              },
        })
      },
      err => {
        console.log("err", err);
      }
    );
  };

  putDataToAPI = () => {
    Axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(
      res => {
        console.log("res", res);
        this.getPostAPI();
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: "",
                body: "",
                userId: 1
              },
        })
      },
      err => {
        console.log("err", err);
      }
    );
  };

  componentDidMount() {
    this.getPostAPI();

    // Axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(function (response) {
    //   // handle success
    //   this.setState({
    //       post:response.data
    //   })
    // })
  }

  render() {
    return (
      <Fragment>
        <div className="form-add-post">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            value={this.state.formBlogPost.title}
            id=""
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body"></label>
          <textarea
            name="body"
            value={this.state.formBlogPost.body}
            id=""
            cols="30"
            rows="10"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="simpan" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        <h1>Blog Post</h1>

        <hr></hr>

        {this.state.post.map(post => {
          return (
            <PostComponent
              key={post.id}
              title={post.title}
              desc={post.body}
              remove={this.handleRemove}
              update={this.handleUpdate}
              data={post}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
