import * as types from './actionTypes';

export const saveResult = (result) => {
    return {
        type: types.STORE_RESULT,
        results: result
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log(getState());
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: types.DELETE_RESULT,
        elementId: id
    };
};