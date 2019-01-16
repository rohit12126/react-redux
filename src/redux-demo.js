const redux = require('redux');

const initialState = {
    counter: 0,
    a: 9,
}

const rootReducer = (state=initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.payload,
        }
    }
    return state;
}

const store = redux.createStore(rootReducer);

// console.log(store.getState());
store.subscribe(() => {
    console.log('Subscription')
    console.log(store.getState());
})

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', payload: 10});

console.log(store.getState());