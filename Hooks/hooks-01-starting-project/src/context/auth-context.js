import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => {}
});

const AuthContextProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    const loginHandler = () => {
        setAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{login: loginHandler, isAuthenticated: authenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;