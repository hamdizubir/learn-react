import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';

class Counter extends Component{
    // state={
    //     order:4
    // }

    // handleCounterChange = (newValue)=>{
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () =>{
    //     this.setState({
    //         order: this.state.order +1,
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // }

    // handleMinus = () =>{
    //     this.setState({
    //         order: this.state.order -1,
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // }

    render(){
        console.log(this.props);
        return(
            <div>
                <button onClick={this.props.handleMinus}>-</button>
                <p>{this.props.order}</p>
                <button onClick={this.props.handlePlus}>+</button>
            </div>
            
        )
    }

    
}

const mapStateToProps = (state) => {
    return{
        order:state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: ()=>dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: ()=>dispatch({type: ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);