import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core';

import Reps from './Components/Reps/Reps';
import Timer from './Components/Timer/Timer';
import Controls from './Components/Controls/Controls';


function App() {

    return (
        <Grid style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>

            <Grid item>
                <Reps />
            </Grid>

            <Grid item>
                <Timer />
            </Grid>

            <Grid item>
                <Controls />
            </Grid>

        </Grid>
    );
}

export default App;
