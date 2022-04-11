import { combineReducers } from 'redux'
import { all, call } from 'redux-saga/effects'

import { requestReducer, RequestState } from './request'
import { toDoReducer, TodoState, rootTodoSaga } from './todo'

export interface RootState {
    request: RequestState
    toDo: TodoState
}

export const rootReducer = combineReducers({
    request: requestReducer,
    todo: toDoReducer,
})

export function* rootSaga() {
    yield all([
        call(rootTodoSaga)
    ])
}