import React from 'react'
import { HashRouter } from 'react-router-dom'
import { HomePage } from './home/HomePage'

function App() {
    return (
        <>
            <HashRouter>
                <HomePage></HomePage>
            </HashRouter>
        </>
    )
}

export { App }
