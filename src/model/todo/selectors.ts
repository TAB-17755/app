import { useAppSelector } from '../store'
import { Task } from '.'

export const taskSelector = (id: Task['id']) => useAppSelector(selector => (
    selector.todo.find(task => task.id === id)
))
