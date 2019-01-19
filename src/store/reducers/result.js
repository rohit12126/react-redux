import * as actions from '../actions/actionTypes';
// import { Map } from 'immutable';

// const initialState = Map({
//     result: null
// })
const initialState = {
    result: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.STORE_RESULT:
        // return state.set('result', action.result);
            return {
                ...state,
                result: action.result,
            }
    }
    return state;
}

export default reducer;