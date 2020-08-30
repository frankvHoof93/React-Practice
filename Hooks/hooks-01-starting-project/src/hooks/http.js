import { useReducer, useCallback } from 'react';

const initialState = {
    loading: false,
    error: null,
    data: null,
    param: null,
    method: null
};

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case 'SEND':
            return { ...httpState, loading: true, error: null, param: action.param, method: action.method };
        case 'RESPONSE':
            return { ...httpState, loading: false, data: action.data, param: action.param, method: action.method };
        case 'ERROR':
            return { ...httpState, loading: false, error: action.error };
        case 'CLEAR_ERROR':
            return { ...httpState, error: null };
        case 'CLEAR':
            return initialState;
        default:
            throw new Error('Invalid Type');
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const clear = useCallback(() => dispatchHttp({type: 'CLEAR'}), [dispatchHttp]);

    const sendRequest = useCallback((url, method, body, param, callMethod) => {
        dispatchHttp({ type: 'SEND' });
        fetch(
            url,
            {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response.json();
            }).then(responseData => {
                console.log('response', responseData);
                dispatchHttp({ type: 'RESPONSE', data: responseData, param: param, method: callMethod });
            }).catch(error => {
                dispatchHttp({ type: 'ERROR', error: error.message });
            });
    }, [dispatchHttp]);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        param: httpState.param,
        method: httpState.method,
        clear: clear
    };
};

export default useHttp;