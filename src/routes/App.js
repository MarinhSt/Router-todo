import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './home/HomePage'
import { CreateTodoPage } from './create/CreateTodoPage'

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateTodoPage />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export { App }
