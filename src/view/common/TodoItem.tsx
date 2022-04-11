import React, { FC, useMemo, useState } from 'react'
import { CheckBox } from './buttons/CheckBox'
import { useAppDispatch } from '../../model/store'
import { Task, processEditTaskAction, processDeleteTaskAction } from '../../model/todo'

interface TodoItemProps {
    id: Task['id']
    title: Task['title']
    description: Task['description']
    color: Task['color']
    checked: Task['checked']
}

type Props = {
    task: TodoItemProps
    onEditClick: () => void
}

export const TodoItem: FC<Props> = ({
    task,
    onEditClick,
}) => {
    const dispatch = useAppDispatch()
    const [ showActions, setShowActions ] = useState(false)
    const {
        id,
        title,
        description,
        color,
        checked
    } = task

    const handleCheckBoxClick = () => {
        dispatch(processEditTaskAction({
            id: id,
            checked: checked ? false : true
        }))
    }

    const handleDeleteClick = () => {
        dispatch(processDeleteTaskAction(id))
    }

    return (
        <li className='toDoItem'>
            {
                color &&
                <div style={{backgroundColor: color}} className='color'/>
            }
            <div className='itemInfo'>
                <h1 className='title'>{ title || id }</h1>
                <p className='description'>{ description }</p>
            </div>

            <CheckBox
                checked={checked}
                onClick={() => handleCheckBoxClick()}
            />
            <div className="actions" onMouseOver={() => setShowActions(true)} onMouseOut={() => setShowActions(false)}>
            {
                <>
                    <div className="action" onClick={() => onEditClick()}>
                        <img className="edit" src={require('../../../public/static/icons/edit.svg')} alt="edit"/>
                    </div>
                    <div className="action delete" onClick={() => handleDeleteClick()}>
                        <img className="delete" src={require('../../../public/static/icons/delete.svg')} alt="delete"/>
                    </div>
                </>
            }
            </div>
        </li>
    )
}
