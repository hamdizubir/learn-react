import React,{Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component{
    render(){
        return(
            <div>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}></Counter>
            </div>
        )
    }

    
}

export default CardProduct;