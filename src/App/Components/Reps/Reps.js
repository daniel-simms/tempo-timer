import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

import { FiberManualRecord as FiberManualRecordIcon } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { Box } from '@material-ui/core';

const Reps = () => {

    const { reps, currentRep } = useContext(AppContext)

    return (
        <Box textAlign='center' mt={3}  >
            <Rating
                name="size-medium"
                max={reps}
                value={currentRep}
                readOnly={true}
                icon={<FiberManualRecordIcon />}
            />
        </Box>
    )
}

export default Reps