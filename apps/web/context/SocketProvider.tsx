'use client'

import React, { Children, useCallback, useContext, useEffect } from 'react'
import { io } from "socket.io-client";


interface SocketProviderProps {
    children?: React.ReactNode
}

interface ISockerContext {
    sendMessage: (msg: string) => any;

}
const SockerContext = React.createContext<ISockerContext | null>(null);


export const useSocket = () => {
    const state = useContext(SockerContext)
    if (!state) throw new Error(`state is undefined`);
    return state;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {

    const sendMessage: ISockerContext['sendMessage'] = useCallback((msg)=>{
        console.log("Send Message", msg)
    }, []);

    useEffect(() => {
        const _socket = io('http://localhost:8000')
        return () => {
            _socket.disconnect();
        }
    }, [])

    return (
        <SockerContext.Provider value={{sendMessage}}>
            {children}
        </SockerContext.Provider>
    )
}