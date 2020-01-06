import React,{Component,Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component{
    state={
        order:4,
    }

    handleCounterChange=(newValue)=>{
        this.setState({
            order:newValue
        })
    }

    render(){
        return(
            <Fragment>
            <div>
                <h1>Counter</h1>
                <p>{this.state.order}</p>
                <hr></hr>
            </div>
            <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)}/>

            </Fragment>

        )
    }
}

export default Product;