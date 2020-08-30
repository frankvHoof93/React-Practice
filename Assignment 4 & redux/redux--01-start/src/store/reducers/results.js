import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat returns a new array
                results: state.results.concat({id: new Date(), value: action.results})
            };
        case actionTypes.DELETE_RESULT:
            // const index = 2;
            // // Clone array first
            // const newArray = [...state.results];
            // // Remove by Index
            // newArray.splice(index, 1);

            // Filter returns a new array
            const updatedArray = state.results.filter(
                (result/*, index*/) => (
                    result.id !== action.elementId
                )
            );
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
};

export default reducer;