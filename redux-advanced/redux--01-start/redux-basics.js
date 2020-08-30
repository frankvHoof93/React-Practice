console.log('Redux-Basics:');

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (currState = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...currState,
                counter: currState.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...currState,
                counter: currState.counter + action.value
            };
        default:
            return currState;
    }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());