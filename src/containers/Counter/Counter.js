import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ct} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                {this.props.sr.map(result => (
                  <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>

                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      ct: state.counter,
      sr: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD', val: 10}),
    onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 15}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
