import {
    STORE_SET_NEW_TODO,
    STORE_SET_NEW_TASK,
    STORE_REMOVE_TASK,
    STORE_UPDATE_TASK
} from './types'

import { TodoState, toDoAction } from './interfaces'

export const initialState: TodoState = []

export function toDoReducer(state = initialState, action: toDoAction) {
    switch (action.type) {
        case STORE_SET_NEW_TODO:
            return action.payload
        case STORE_SET_NEW_TASK:
            return [
                ...state,
                action.payload
            ]
        case STORE_REMOVE_TASK:
            return state.filter(task => task.id !== action.payload)
        case STORE_UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) return { ...task, ...action.payload }
                return task
            })
        default:
            return state
    }
}
