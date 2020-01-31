import React from 'react';

const PostComponent = (props) =>{
    return(
        <div>
            <div>
                <img src="https://placeimg.com/200/150/tech"></img>
            </div>
            <div>
                <h3 style={{cursor:'pointer'}} onClick={()=>props.goDetail(props.data.id)}>{props.data.title}</h3>
            </div>
            <div>
                <p>{props.data.body}</p>
            </div>
            <div>
                <button onClick={()=> props.remove(props.data.id)}>remove</button>
                <button onClick={()=> props.update(props.data)}>update</button>
            </div>
            <div>
            <p>-----------------</p>
            </div>
        </div>
    )
}

export default PostComponent;