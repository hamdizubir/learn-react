import React,{Component, Fragment} from 'react';
import LifeCycleComponent from '../../component/LifeCycleComponent/LifeCycleComponent';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BlogPost from '../BlogPost/BlogPost';
import Product from '../Product/Product';

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
                    </div>
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/lifecycle" component={LifeCycleComponent}></Route>
                    <Route path="/product" component={Product}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}


export default Home;