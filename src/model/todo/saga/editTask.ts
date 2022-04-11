import { put, call, CallEffect, PutEffect } from 'redux-saga/effects'
import { request, Request, Response } from '../../../utils/api'
import { Task } from '..'

import {
    ProcessEditTask,
    StoreUpdateTask,
    storeUpdateTaskAction,
} from '..'

interface EditTaskResponse extends Response {
    data: Task
}

export function* editTaskSaga(action: ProcessEditTask): Generator<
    CallEffect<Response> | PutEffect<StoreUpdateTask>,
    void,
    EditTaskResponse
> {
    const response: EditTaskResponse = yield call(request, {
        url: 'http://localhost:8080/todo/edit',
        method: 'put',
        name: 'todo/edit',
        data: action.payload
    })

    yield put(storeUpdateTaskAction(response.data))
}
