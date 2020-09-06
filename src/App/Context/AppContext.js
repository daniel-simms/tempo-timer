import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const config = {
        tempo: 5,
        hold: 1,
        reps: 10
    }

    const [contraction, setContraction] = useState(config.tempo)
    const [hold, setHold] = useState(config.hold)
    const [extention, setExtention] = useState(config.tempo)
    const [reps, setReps] = useState(config.reps)
    const [currentRep, setCurrentRep] = useState(0)
    const [linked, setLinked] = useState(true)
    const [count, setCount] = useState(null)
    const [timerInterval, setTimerInterval] = useState()
    const [counting, setCounting] = useState(false)
    const [repPhase, setRepPhase] = useState(1)
    const [firstRepDown, setFirstRepDown] = useState(true)
    const [emojis, setEmojis] = useState(false)

    useEffect(() => {
        setExtention(contraction)
    }, [linked])

    return (
        <AppContext.Provider
            value={{
                contraction, setContraction,
                hold, setHold,
                extention, setExtention,
                reps, setReps,
                currentRep, setCurrentRep,
                linked, setLinked,
                count, setCount,
                timerInterval, setTimerInterval,
                counting, setCounting,
                repPhase, setRepPhase,
                firstRepDown, setFirstRepDown,
                emojis, setEmojis
            }}
        >
            {children}
        </AppContext.Provider>
    )

}

export default AppContext

export { AppProvider }
