import React, { FC } from 'react'

export const Home: FC<{}> = () => {
    return (
        <div className="home">
            <img src={require('../../../public/static/icons/logo.svg')} className="logo" alt="logo" />
        </div>
    )
}
