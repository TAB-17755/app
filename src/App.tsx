import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { MainLayout } from './view/layout/Main'
import routes from './Routes'

export const App = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    {
                        routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element}/>
                        ))
                    }
                </Routes>
            </MainLayout>
        </Router>
    )
}
