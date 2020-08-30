import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    // Filter returns a new array
    const updatedArray = state.results.filter(
        (result/*, index*/) => (
            result.id !== action.elementId
        )
    );
    return updateObject(state,
        {
            results: updatedArray
        }
    );
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state,
                {
                    // concat returns a new array
                    results: state.results.concat({ id: new Date(), value: action.results })
                }
            );
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);            
        default:
            return state;
    }
};

export default reducer;