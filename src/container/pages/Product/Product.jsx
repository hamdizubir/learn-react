import React,{Component,Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';
import {connect} from 'react-redux';

class Product extends Component{
    // state={
    //     order:4,
    // }

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
                <p>Keranjang</p>
                <p>{this.props.order}</p>
                <hr></hr>
            </div>
            <CardProduct/>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        order:state.totalOrder
    }
}
export default connect(mapStateToProps)(Product);