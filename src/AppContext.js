import { createContext } from "react";

export const userState = {
    username: '',
    age: '',
    token: '',
    usertype: '',
}

export const AppContext = createContext();