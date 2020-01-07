import React from 'react';

const PostComponent = (props) =>{
    return(
        <div>
            <div>
                <img src="https://placeimg.com/200/150/tech"></img>
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default PostComponent;