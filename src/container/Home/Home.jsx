import React,{Component, Fragment} from 'react';
import LifeCycleComponent from '../../component/LifeCycleComponent/LifeCycleComponent';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import YoutubeComponent from '../pages/YoutubeComponent/YoutubeComponent';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

class Home extends Component{
    state = {
        showComponent: true,

    }

    render(){
        return(
            <BrowserRouter>
                <Fragment>
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/lifecycle'>Lifecycle</Link>
                        <Link to='/youtube'>Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path='/detail-post/:id' component={DetailPost }></Route>
                    <Route path="/lifecycle" component={LifeCycleComponent}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/youtube" component={YoutubeComponent}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}


export default Home;