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

import {
    ProcessFetchTodo,
    ProcessCreateTask,
    ProcessEditTask,
    ProcessDeleteTask,
    StoreSetNewTodo,
    StoreAddNewTask,
    StoreRemoveTask,
    StoreUpdateTask
} from './interfaces'

export const processFetchTodoAction = (): ProcessFetchTodo => ({
    type: PROCESS_FETCH_TODO,
})

export const processCreateTaskAction = (payload: ProcessCreateTask['payload']): ProcessCreateTask => ({
    type: PROCESS_CREATE_TASK,
    payload
})

export const processEditTaskAction = (payload: ProcessEditTask['payload']): ProcessEditTask => ({
    type: PROCESS_EDIT_TASK,
    payload
})

export const processDeleteTaskAction = (payload: ProcessDeleteTask['payload']): ProcessDeleteTask => ({
    type: PROCESS_DELETE_TASK,
    payload
})

export const storeSetNewTodoAction = (payload: StoreSetNewTodo['payload']): StoreSetNewTodo => ({
    type: STORE_SET_NEW_TODO,
    payload
})

export const storeAddNewTaskAction = (payload: StoreAddNewTask['payload']): StoreAddNewTask => ({
    type: STORE_SET_NEW_TASK,
    payload
})

export const storeRemoveTaskAction = (payload: StoreRemoveTask['payload']): StoreRemoveTask => ({
    type: STORE_REMOVE_TASK,
    payload
})

export const storeUpdateTaskAction = (payload: StoreUpdateTask['payload']): StoreUpdateTask => ({
    type: STORE_UPDATE_TASK,
    payload
})
