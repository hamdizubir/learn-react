import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // this.setState({
    //     count:2,

    // })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Life Cycle Component</h1>
        <button onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
        <hr></hr>

        <p>Total: {this.props.order}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.totalOrder
  };
};

export default connect(mapStateToProps)(LifeCycleComponent);
