import React, { useState } from 'react'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import Navigation from './components/Navigation'

function App() {
    const theme = createMuiTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#F74B00',
                contrastText: '#fff',
            },
            secondary: {
                main: '#424242',
                contrastText: '#fff',
            },
        },
    })

    return (
        <Provider store={store}>
            <BrowserRouter>x♀]
                <ThemeProvider theme={theme}>
                    <div
                        style={{
                            height: '100vh',
                            width: '100vw',
                            backgroundColor: '#353535',
                        }}
                    >
                        <Navigation />
                        <Router />
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
