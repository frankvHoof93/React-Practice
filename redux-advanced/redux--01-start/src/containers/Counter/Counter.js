import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as counterActionCreator from '../../store/actions/counter';
import * as storeActionCreator from '../../store/actions/results';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(item => {
                        return (
                        <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>
                            {item.value}
                        </li>
                    )})}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(counterActionCreator.increment()),
        onDecrementCounter: () => dispatch(counterActionCreator.decrement()),
        onAddCounter: () => dispatch(counterActionCreator.add(5)),
        onSubtractCounter: () => dispatch(counterActionCreator.subtract(5)),

        onStoreResult: (results) => dispatch(storeActionCreator.storeResult(results)),
        onDeleteResult: (id) => dispatch(storeActionCreator.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);