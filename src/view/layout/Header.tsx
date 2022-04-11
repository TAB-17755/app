import React, { FC } from 'react'
import { NavigationLink } from '../common/NavigationLink'

export const Header: FC<{}> = () => {

    return (
        <header className='header'>
            <nav className='container'>
                <ul>
                    <li><NavigationLink to='/' name='Home'/></li>
                    <li><NavigationLink to='/todo' name='To Do'/></li>
                    {/* <li><NavigationLink to='/123' name='Not Found'/></li> */}
                </ul>
            </nav>
        </header>
    )
}
