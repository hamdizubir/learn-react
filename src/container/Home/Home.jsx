import React,{Component} from 'react';
import LifeCycleComponent from '../../component/LifeCycleComponent/LifeCycleComponent';

class Home extends Component{
    state = {
        showComponent: true,

    }

    render(){
        return(
            <div>
                <p>LifeCycleComponent</p>
                <hr></hr>
            {
                this.state.showComponent ? <LifeCycleComponent/>:null
            }
            </div>
        )
    }
}


export default Home;