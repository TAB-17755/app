import React from 'react'
import { RouteProps } from 'react-router-dom'
import { Home } from './view/pages/Home'
import { NotFound } from './view/pages/NotFound'
import { TodoList } from './view/pages/TodoList'

const routes: RouteProps[] = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/todo',
        element: <TodoList/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]

export default routes
