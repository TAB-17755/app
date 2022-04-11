import { takeEvery } from 'redux-saga/effects'
import {
    PROCESS_FETCH_TODO,
    PROCESS_CREATE_TASK,
    PROCESS_EDIT_TASK,
    PROCESS_DELETE_TASK
} from '../types'
import { fetchTodoSaga } from './fetchTodo'
import { createTaskSaga } from './createTask'
import { editTaskSaga } from './editTask'
import { deleteTaskSaga } from './deleteTask'

export function* rootTodoSaga() {
    yield takeEvery(PROCESS_FETCH_TODO, fetchTodoSaga)
    yield takeEvery(PROCESS_CREATE_TASK, createTaskSaga)
    yield takeEvery(PROCESS_EDIT_TASK, editTaskSaga)
    yield takeEvery(PROCESS_DELETE_TASK, deleteTaskSaga)
}
