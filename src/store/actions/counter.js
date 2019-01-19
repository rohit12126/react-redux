import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT,
    }
}

export const add = (payload) => {
    return {
        type: actionTypes.ADD,
        payload
    }
}