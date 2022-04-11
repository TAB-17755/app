import {
    PROCESS_FETCH_TODO,
    PROCESS_CREATE_TASK,
    PROCESS_EDIT_TASK,
    PROCESS_DELETE_TASK,
    STORE_SET_NEW_TODO,
    STORE_SET_NEW_TASK,
    STORE_REMOVE_TASK,
    STORE_UPDATE_TASK
} from './types'

export interface Task {
    id: string,
    title: string,
    description: string,
    color: string,
    checked: boolean
    timestamp: Date
}

export interface TodoState extends Array<Task> {}


export interface ProcessFetchTodo {
    type: typeof PROCESS_FETCH_TODO
}

export interface ProcessCreateTask {
    type: typeof PROCESS_CREATE_TASK
    payload: {
        title: Task['title'],
        description: Task['description'],
        color: Task['color'],
    }
}

export interface ProcessEditTask {
    type: typeof PROCESS_EDIT_TASK
    payload: {
        id: Task['id'],
        title?: Task['title'],
        description?: Task['description'],
        color?: Task['color'],
        checked?: Task['checked']
    }
}

export interface ProcessDeleteTask {
    type: typeof PROCESS_DELETE_TASK
    payload: Task['id']
}

export interface StoreSetNewTodo {
    type: typeof STORE_SET_NEW_TODO
    payload: TodoState
}

export interface StoreAddNewTask {
    type: typeof STORE_SET_NEW_TASK
    payload: Task
}

export interface StoreRemoveTask {
    type: typeof STORE_REMOVE_TASK
    payload: Task['id']
}

export interface StoreUpdateTask {
    type: typeof STORE_UPDATE_TASK
    payload: Task
}

export type toDoAction =
    | ProcessFetchTodo
    | ProcessCreateTask
    | ProcessEditTask
    | ProcessDeleteTask
    | StoreSetNewTodo
    | StoreAddNewTask
    | StoreRemoveTask
    | StoreUpdateTask