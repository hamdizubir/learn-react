import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component{
    // state={
    //     order:4
    // }

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
        console.log(this.props);
        return(
            <div>
                <button onClick={this.handleMinus}>-</button>
                <p>{this.props.order}</p>
                <button onClick={this.handlePlus}>+</button>
            </div>
            
        )
    }

    
}

const mapStateToProps = (state) => {
    return{
        order:state.totalOrder
    }
}

export default connect(mapStateToProps)(Counter);