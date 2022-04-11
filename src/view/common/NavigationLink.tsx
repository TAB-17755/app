import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
    to: string
    name?: string
}

export const NavigationLink: FC<PropsWithChildren<Props>> = ({
    to,
    name,
    children
}) => {
    const [ active, setActive ] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === to) return setActive(true)
        return setActive(false)
    }, [location])

    return (
        <Link to={to} className={`navigationLink ${active ? 'navigationLink--current' : ''}`}>
            {
                children || name
            }
        </Link>
    )
}
