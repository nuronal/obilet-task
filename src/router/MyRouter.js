import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { setHeader } from '../helpers/setHeader'
import { routes } from './routes'

const MyRouter = () => {
    setHeader()
    return (
        <BrowserRouter>
            <Routes>
                {routes?.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter