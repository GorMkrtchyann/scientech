import {createContext, useState} from "react";


export const AllContext = createContext()

export const AllContextFunc = ({ children }) => {

    const [itemId, setItemId] = useState()

    return(
        <AllContext.Provider value={{itemId, setItemId}}>
            {children}
        </AllContext.Provider>
    )
}