import React from 'react';

const PostComponent = (props) =>{
    return(
        <div>
            <div>
                <img src="https://placeimg.com/200/150/tech"></img>
            </div>
            <div>
                <h3>{props.data.title}</h3>
            </div>
            <div>
                <p>{props.data.body}</p>
            </div>
            <div>
                <button onClick={()=> props.remove(props.data.id)}>remove</button>
            </div>
            <div>
            <p>-----------------</p>
            </div>
        </div>
    )
}

export default PostComponent;