import React, { FC } from 'react'

const COLORS = [
    '#ffffff',
    '#F6F54D',
    '#F1A9F2',
    '#30AADD',
    '#8479E1',
    '#97DBAE',
]

type Props = {
    onPick: (color: string) => void
    value: string
}

export const ColorPicker: FC<Props> = ({
    onPick,
    value
}) => {

    return (
        <div className='colorPicker'>
            {
                COLORS.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: color,
                            opacity: value === color ? 1 : .5
                        }}
                        className='color'
                        onClick={() => onPick(color)}
                    />
                ))
            }
        </div>
    )
}
