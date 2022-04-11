import { put, call, CallEffect, PutEffect } from 'redux-saga/effects'
import { request, Request, Response } from '../../../utils/api'
import { Task } from '..'

import {
    ProcessCreateTask,
    StoreAddNewTask,
    storeAddNewTaskAction
} from '..'

interface CreateTaskResponse extends Response {
    data: Task
}

export function* createTaskSaga(action: ProcessCreateTask): Generator<
    CallEffect<Response> | PutEffect<StoreAddNewTask>,
    void,
    CreateTaskResponse
> {
    const response: CreateTaskResponse = yield call(request, {
        url: 'http://localhost:8080/todo/create',
        method: 'POST',
        name: 'todo/create',
        data: action.payload
    })

    yield put(storeAddNewTaskAction(response.data))
}
