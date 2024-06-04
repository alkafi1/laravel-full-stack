import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currrentUser: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCES_TOKEN'));
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCES_TOKEN', token);
        } else {
            localStorage.removeItem('ACCES_TOKEN');
        }
    }
    return (
        <StateContext.Provider value={{
            user, token, setUser, setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = () => useContext(StateContext)