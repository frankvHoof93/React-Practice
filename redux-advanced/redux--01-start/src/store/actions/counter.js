import * as types from './actionTypes';

export const increment = () => {
    return {
        type: types.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: types.DECREMENT
    };
};


export const add = (value) => {
    return {
        type: types.ADD,
        value: value
    };
};


export const subtract = (value) => {
    return {
        type: types.SUBTRACT,
        value: value
    };
};