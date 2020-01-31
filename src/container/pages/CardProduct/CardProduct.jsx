import React,{Component} from 'react';

class CardProduct extends Component{
    state={
        order:4
    }

    handleCounterChange = (newValue)=>{
        this.props.onCounterChange(newValue)
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order +1,
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () =>{
        this.setState({
            order: this.state.order -1,
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleMinus}>-</button>
                <p>{this.state.order}</p>
                <button onClick={this.handlePlus}>+</button>
            </div>
            
        )
    }
}

export default CardProduct;