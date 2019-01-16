import React, {Component} from 'react';
import { connect } from 'react-redux';

class Test extends Component {
    render() {
        return(<div>
            <h1>Test Component</h1>
            <button onClick={this.props.handleIncrement}>Increment Counter</button>
            <button onClick={() => this.props.handleAdd(4)}>Add Counter</button>
            <button onClick={this.props.handleStore}>Store Result</button>
            <h3>Counter: {this.props.ctr}</h3>
            <h3>Result: {this.props.res}</h3>
        </div>)
    }
} 

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        res: state.result,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => 
            {dispatch({ type: 'INC_COUNTER' })},
        handleAdd: (num) => 
            {dispatch({ type: 'ADD_COUNTER', payload: num })},
        handleStore: () =>
            {dispatch({ type: 'STORE_RESULT' })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);