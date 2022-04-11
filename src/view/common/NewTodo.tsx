import React, { FC, useState, useCallback, useEffect } from 'react'
import { ColorPicker } from './ColorPicker'
import { useAppDispatch } from '../../model/store'
import {
    processCreateTaskAction,
    processEditTaskAction,
    taskSelector
} from '../../model/todo'

type Props = {
    goBack: () => void
    edit?: {
        taskId: string,
    }
}

export const NewTodo: FC<Props> = ({
    goBack,
    edit
}) => {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ color, setColor ] = useState('')
    const dispatch = useAppDispatch()
    const task = edit ? taskSelector(edit.taskId) : undefined

    const add = () => {
        console.log(title.length === 0, title)
        console.log(color.length === 0, color)
        if (title.length === 0) return
        if (color.length === 0) return

        if (edit) {
            dispatch(processEditTaskAction({
                id: edit.taskId,
                title: title,
                description: description,
                color: color,
            }))
        } else {
            dispatch(processCreateTaskAction({
                title: title,
                description: description,
                color: color,
            }))
        }
        goBack()
    }

    useEffect(() => {
        if (task && edit) {
            setTitle(task.title)
            setDescription(task!.description)
            setColor(task!.color)
        }
    }, [task])

    return (
        <div className='newTodo'>
            <label>Title</label>
            <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label>Description</label>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <label>Color</label>
            <ColorPicker
                onPick={value => setColor(color === value ? '' : value)}
                value={color}
            />
            <div className='addButton' onClick={() => add()}>{edit ? 'Edit' : 'Add'}</div>
        </div>
    )
}
