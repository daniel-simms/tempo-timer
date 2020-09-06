import React, { useState, useContext } from 'react'
import AppContext from '../../Context/AppContext'

import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';
import { Box, Fab } from '@material-ui/core';

const NumSelect = ({title, type, value, setValue}) => {

    const { counting } = useContext(AppContext)

    const [min] = useState(type === 'reps' || type === 'tempo' ? 1 : 0)
    const [max] = useState(type === 'reps' ? 15 : 7)

    const increment = () => value < max && setValue(prev => prev + 1)
    const decrement = () => value > min && setValue(prev => prev - 1)

    return (

        <Box textAlign='center' style={{marginTop: title ? 0 : '3em'}}>

            {title && <p style={{margin: 0, lineHeight: '3em', fontWeight: 'bold'}}>{title}</p>}

            <Fab
                color="primary"
                size='small' 
                aria-label="add"
                disabled={counting || value === max}
            >
                <AddIcon onClick={increment} />
            </Fab>

            <Box
                mx={2}
                my={1}
                style={{fontSize:'5vh'}}
            >
                {value}
            </Box>

            <Fab
                color="secondary"
                size='small'
                aria-label="remove"
                disabled={counting || value === min}
            > 
                <RemoveIcon onClick={decrement} />
            </Fab>

        </Box>
    )
}

export default NumSelect