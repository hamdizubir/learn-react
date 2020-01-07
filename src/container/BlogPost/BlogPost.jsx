import React,{Component, Fragment} from 'react';
import PostComponent from '../../component/Post/PostComponent';
import Axios from 'axios';


class BlogPost extends Component{

    state={
        post:[],

    }

    componentDidMount(){
        fetch('http://localhost:3004/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post:json,

            })
        })


            // Axios.get('https://jsonplaceholder.typicode.com/posts')
            // .then(function (response) {
            //   // handle success
            //   this.setState({
            //       post:response.data
            //   })
            // })
    }

    render(){
        return(
            <Fragment>
                <h1>Blog Post</h1>
                
                <hr></hr>
                {
                    this.state.post.map(post=>{
                        return <PostComponent 
                                key={post.id}
                                title={post.title} 
                                desc={post.body}/>
                    })
                }
            </Fragment>
            
        )
    }
}

export default BlogPost;