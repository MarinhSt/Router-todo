import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './home/HomePage'
import { CreateTodoPage } from './create/CreateTodoPage'
import { EditTodoPage } from './edit/EditTodoPage'

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateTodoPage />} />
                    <Route path="/edit" element={<EditTodoPage />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export { App }
