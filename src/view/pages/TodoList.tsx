import React, { FC, useState, useMemo, useEffect } from 'react'
import { TodoItem } from '../common/TodoItem'
import { Button } from '../common/buttons/Button'
import { LoadingSpinner } from '../common/LoadingSpinner'
import { NewTodo } from '../common/NewTodo'
import { useAppSelector, useAppDispatch } from '../../model/store'
import {
    taskSelector,
    processFetchTodoAction
} from '../../model/todo'
import {
    todoRequestSelector
} from '../../model/request'

type Tabs = 'newTask'| 'editTask' | 'todo'

export const TodoList: FC<{}> = () => {
    const [ tab, setTab ] = useState<Tabs>('todo')
    const [ loading, setLoading ] = useState(false)
    const [ editTaskId, setEditTaskId ] = useState('')
    const dispatch = useAppDispatch()
    const todo = useAppSelector(state => state.todo)
    const todoRequest = todoRequestSelector()

    useEffect(() => {
        fetchTodo()
    }, [])

    useMemo(() => {
        console.log(todoRequest)
        setLoading(todoRequest.length > 0 ? true : false)
    }, [todoRequest.length])

    const fetchTodo = () => {
        dispatch(processFetchTodoAction())
    }

    return (
        <div className='container'>
            <div className="todoWrapper">
                <div className='todoLeftSection'></div>
                <div className='todoList'>
                    <div className='listHeader'>
                        <h1>My To Do List</h1>
                        <Button
                            name={tab != 'todo' ? 'Show tasks' : 'Add new task'}
                            onClick={() => setTab(tab === 'todo' ? 'newTask' : 'todo')}
                        />
                    </div>
                    {
                        tab === 'todo' ?
                        <ul>
                            {
                                todo.length === 0 ?
                                <h1>Empty</h1> :
                                todo.map((task, index) => (
                                    <TodoItem
                                        key={index}
                                        task={{
                                            id: task.id,
                                            title: task.title,
                                            description: task.description,
                                            checked: task.checked,
                                            color: task.color,
                                        }}
                                        onEditClick={() => {
                                            setEditTaskId(task.id)
                                            setTab('editTask')
                                        }}
                                    />
                                ))
                            }
                        </ul> :
                        <NewTodo
                            goBack={() => setTab('todo')}
                            edit={tab === 'editTask' ? { taskId: editTaskId } : undefined}
                        />
                    }
                </div>
                <div className="todoListStatusWrapper">
                    <div className="todoListStatus">
                        {
                            loading ?
                            <LoadingSpinner/> :
                            <Button name='Update' onClick={() => fetchTodo()}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
