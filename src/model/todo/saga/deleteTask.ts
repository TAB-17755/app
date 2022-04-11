import { put, call, CallEffect, PutEffect } from 'redux-saga/effects'
import { request, Request, Response } from '../../../utils/api'
import { Task } from '..'

import {
    ProcessDeleteTask,
    StoreRemoveTask,
    storeRemoveTaskAction
} from '..'

interface RemoveTaskResponse extends Response {
    data: Task
}

export function* deleteTaskSaga(action: ProcessDeleteTask): Generator<
    CallEffect<Response> | PutEffect<StoreRemoveTask>,
    void,
    RemoveTaskResponse
> {
    const response: RemoveTaskResponse = yield call(request, {
        url: 'http://localhost:8080/todo/delete',
        method: 'delete',
        name: 'todo/delete',
        data: {id: action.payload}
    })

    yield put(storeRemoveTaskAction(response.data.id))
}
