import * as actionTypes from './actionTypes';

export const storeResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    }
}