import React, { useContext } from 'react'

import AppContext from '../../Context/AppContext'

import LinkIcon from '@material-ui/icons/Link';
import { Grid, Fab, Box } from '@material-ui/core';
import {
    Timer as TimerIcon,
    Restore as RestoreIcon,
    ArrowUpward as ArrowUpwardIcon,
    ArrowDownward as ArrowDownwardIcon
} from '@material-ui/icons';

import NumSelect from '../NumSelect/NumSelect'

const Controls = () => {

    const {
        contraction, setContraction,
        hold, setHold,
        extention, setExtention,
        reps, setReps,
        linked, setLinked,
        counting, setCounting,
        firstRepDown, setFirstRepDown
    } = useContext(AppContext)
    

    const setTempo = (func) => {
        setContraction(func)
        setExtention(func)
    }

    return (
        <Box textAlign='center' >
            <Grid container justify="center" spacing={1}>

                <Grid item>
                    <NumSelect
                        value={contraction}
                        setValue={linked ? setTempo : setContraction}
                        type='tempo'
                        title='Tempo'
                    />
                </Grid>

                <Grid item>
                    <NumSelect
                        value={hold}
                        setValue={setHold}
                        type='hold'
                        title={
                            <LinkIcon
                                fontSize='small'
                                color={counting ? 'disabled' : linked ? 'primary' : 'secondary'}
                                style={{position: 'relative', top: '.3em', cursor: counting ? 'inherit' : 'pointer'}}
                                onClick={() => {setLinked(prev => !counting && !prev)}}
                            />
                        }
                    />
                </Grid>

                <Grid item>
                    <NumSelect
                        value={extention}
                        setValue={linked ? setTempo : setExtention}
                        type='tempo'
                        title={
                            firstRepDown 
                                ? 
                                    <ArrowUpwardIcon
                                        fontSize='small'
                                        color={counting ? 'disabled' : 'primary'}
                                        style={{position: 'relative', top: '.3em', cursor: counting ? 'inherit' : 'pointer'}}
                                        onClick={() => {setFirstRepDown(prev => !counting && !prev)}}
                                    />
                                : 
                                    <ArrowDownwardIcon
                                        fontSize='small'
                                        color={counting ? 'disabled' : 'primary'}
                                        style={{position: 'relative', top: '.3em', cursor: counting ? 'inherit' : 'pointer'}}
                                        onClick={() => {setFirstRepDown(prev => !counting && !prev)}}
                                    />
                        }
                    />
                </Grid>

                <Grid item>
                    <NumSelect
                        value={reps}
                        setValue={setReps}
                        type='reps'
                        title='Reps'
                    />
                </Grid>

            </Grid>

            <Fab
                color={counting ? 'secondary' : 'primary'}
                aria-label="start"
                style={{margin: 20}}
                onClick={() => setCounting(prev => !prev)} 
            > 
                {counting ? <RestoreIcon /> : <TimerIcon />}
            </Fab>
            
        </Box>
    )
}

export default Controls