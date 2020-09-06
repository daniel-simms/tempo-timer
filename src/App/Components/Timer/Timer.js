import React, { useContext, useEffect } from 'react'

import AppContext from '../../Context/AppContext'

import { Box } from '@material-ui/core';

const Timer = () => {

    const {
        contraction,
        hold,
        extention,
        reps,
        currentRep, setCurrentRep,
        count, setCount,
        timerInterval, setTimerInterval,
        counting, setCounting,
        repPhase, setRepPhase,
        firstRepDown,
        emojis, setEmojis
    } = useContext(AppContext)

    const setCounter = (context) => {
        clearInterval(timerInterval)
        setTimerInterval(
            setInterval(() => setCount(prev => {
            if(prev === context) {
                if (repPhase === 3) {
                    setCurrentRep(prev => prev + 1)
                    setRepPhase(1)
                }
                else {
                    const skipHoldPhase = hold > 0
                    skipHoldPhase ? setRepPhase(repPhase + 1) : setRepPhase(3)
                }
                return 1
            }
            else return prev + 1 
        }), 1000))
    }

    useEffect(() => {


        if(counting) {
            if(reps === currentRep) setCounting(false)
            if(repPhase === 1) setCounter(contraction)
            if(repPhase === 2) setCounter(hold)
            if(repPhase === 3) setCounter(extention)
        }

        if(!counting) {
            clearInterval(timerInterval)
            setRepPhase(1)
            setCount(null)
            setCurrentRep(0)
        }
        
    }, [counting, repPhase])

    return (
        <Box
            color={counting && repPhase === 1 && count === 1 && currentRep > 0 ? 'greenyellow' : 'inherit'}
            fontSize='calc(20vmax)'
            onClick={() => setEmojis(prev => !prev)}
            textAlign='center'
        >
            {
                counting
                    ? repPhase === 1
                            ? count === null
                                ? emojis
                                    ? '🏋🏻‍♂️'
                                    : '-'
                                : count === 1
                                    ? currentRep > 0
                                        ? currentRep
                                        : firstRepDown
                                            ? emojis
                                                ? '☝🏻'
                                                : 'up'
                                            : emojis
                                                ? '👇🏻'
                                                : 'down'
                                    : count
                            :
                        repPhase === 2
                            ? count === 1
                                ? emojis
                                    ? '✋🏻'
                                    : 'hold'
                                : count
                            :
                        repPhase === 3
                            && count === 1
                                ? firstRepDown
                                    ? emojis
                                        ? '👇🏻'
                                        : 'down'
                                    : emojis
                                        ? '☝🏻'
                                        : 'up'
                                : count 
                    : emojis
                        ? '🏋🏻‍♂️'
                        : '-'
            }         
        </Box>
    )
}

export default Timer