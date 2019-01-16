const initialState = {
    counter: 4,
    result: null
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
    if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            result: state.counter,
        }
    }
    return state;
}

export default rootReducer;
