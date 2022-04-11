import React, { FC, useState } from 'react'

export interface ButtonProps {
    name: string
    onClick: () => void
}

type Props = ButtonProps

export const Button: FC<Props> = ({
    name,
    onClick
}) => {

    return (
        <div className='button' onClick={onClick}>
            { name }
        </div>
    )
}
