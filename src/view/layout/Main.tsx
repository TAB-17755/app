import React, { FC, PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const MainLayout: FC<PropsWithChildren<{}>> = ({
    children
}) => {
    return (
        <div className='layout'>
            <Header/>
            <div className='main'>
                { children }
            </div>
        </div>
    )
}
