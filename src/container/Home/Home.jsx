import React,{Component} from 'react';
import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';

class Home extends Component{
    render(){
        return(
            <div>
                <YoutubeComponent title="Test1" desc="Desc1"/>
                <YoutubeComponent title="Test2" desc="Desc2"/>
                <YoutubeComponent />
            </div>
        )
    }
}


export default Home;