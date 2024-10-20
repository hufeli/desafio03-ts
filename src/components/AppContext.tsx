import { createContext, useEffect, useState } from "react"
import { createLocalStorage, getAllLocalStorage } from "../services/storage"

interface IAppContext {
    name: string
    email: string
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const storage = getAllLocalStorage()

    useEffect(() => {
        if (storage) {
            const { name, email, isLoggedIn } = JSON.parse(storage)
            setName(name)
            setEmail(email)
            setIsLoggedIn(isLoggedIn)
        }
    }, [])

    return (
        <AppContext.Provider value={{ name, email, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}