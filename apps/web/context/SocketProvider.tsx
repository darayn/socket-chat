'use client'

import React, { Children, useCallback } from 'react'


interface SocketProviderProps {
    children?: React.ReactNode
}

interface ISockerContext {
    sendMessage: (msg: string) => any;

}
const SockerContext = React.createContext<ISockerContext | null>(null);


export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {

    const sendMessage: ISockerContext['sendMessage'] = useCallback((msg)=>{
        console.log("Send Message", msg)
    }, []);

    return (
        <SockerContext.Provider value={{sendMessage}}>
            {children}
        </SockerContext.Provider>
    )
}