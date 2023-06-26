import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const InfoNoteContext = createContext()

export default function InfoNoteProvider({ children }) {
    const [inputInfo, setInputInfo] = useState(0)
     const navigate = useNavigate()

     useEffect(() => {
        if (lsUser === null) {
            navigate("/")
        } else {
            navigate("/")
        }
    }, [])

    return (
        <InfoNoteContext.Provider value={{ inputInfo, setInputInfo }}>
            {children}
        </InfoNoteContext.Provider>
    )
}


