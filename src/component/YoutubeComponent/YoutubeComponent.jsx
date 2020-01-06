import React from 'react';

const YoutubeComponent = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className='img-thumb'>
                <img src="https://agrosmart.com.br/2018/wp-content/uploads/2018/02/500x300.png" alt=""/>
            </div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
   title: 'Title',
   desc: 'Desc'

}
    

    

export default YoutubeComponent;