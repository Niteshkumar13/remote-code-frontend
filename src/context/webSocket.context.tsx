import { useContext, createContext, useState, useEffect, FC, ReactNode } from "react";
import io, { Socket } from 'socket.io-client';
const CreateSocketConn = createContext<Socket | null>(null);
export const useSocketConn = () => {
    const context = useContext(CreateSocketConn)
    if (!context) {
        throw new Error("err in socket context")
    }
    return context
};

export const SocketContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [socket, setSocket] = useState<any>();
    const url: string | undefined = process.env.REACT_APP_API_URL;
    // establish the socket conn between client and server when user is authenticated 
    useEffect(() => {
        try {
            if (url) {
                const socket = io(url, {
                    query: {
                        user: "niteshkumar"
                    }
                });
                setSocket(socket);
                return () => {
                    socket.close()
                }
            }
            else {
                if (socket) {
                    socket.close()
                    setSocket(null)
                }
            }
        }
        catch (e:any) {
            console.log("error hai bhai",e)
        }

    }, [])

    return (
        <CreateSocketConn.Provider value={socket}>
            {children}
        </CreateSocketConn.Provider>
    )
}