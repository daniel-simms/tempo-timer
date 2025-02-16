import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import { AppProvider } from './App/Context/AppContext'

import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppProvider className="App">
                <App />
            </AppProvider>
        </ThemeProvider>
    </React.StrictMode>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
