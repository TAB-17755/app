import React, { FC } from 'react'

type Props = {
    checked?: boolean
    onClick: () => void
}

export const CheckBox: FC<Props> = ({
    checked,
    onClick
}) => {

    return (
        <div className='checkBox' onClick={() => onClick()}>
            {
                checked &&
                <img src={require('../../../../public/static/icons/check.svg')}/>
            }
        </div>
    )
}
