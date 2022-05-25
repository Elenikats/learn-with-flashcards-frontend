import React from 'react';
import { useEffect, useState } from "react";

export const userContext = React.createContext();

// get data
const userFromStorage = localStorage.getItem("user");
const userDefault = userFromStorage ? JSON.parse(userFromStorage) : null;

const tokenFromStorage = localStorage.getItem("token");
const tokenDefault = tokenFromStorage ? tokenFromStorage : null;


export default function UserProvider(props) {

    const [user, setUser] = useState(userDefault);
    const [token, setToken] = useState(tokenDefault);

    // this stores the login to Local Storage in JSON format. The useEffect will update when [.. ] changes. WE SEND DATA
    useEffect(() => {
    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
    } else {
        localStorage.removeItem("user");
    }
    }, [user]);

    useEffect(() => {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
    }, [token]);

    const value = [user, setUser, token, setToken];

    return (
        <userContext.Provider value={value}> {props.children} </userContext.Provider>
    )
}

