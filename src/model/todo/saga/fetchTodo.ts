import { put, call, CallEffect, PutEffect } from 'redux-saga/effects'
import { request, Request, Response } from '../../../utils/api'
import { Task } from '..'

import {
    ProcessCreateTask,
    StoreSetNewTodo,
    storeSetNewTodoAction
} from '..'

interface FetchTodoResponse extends Response {
    data: Task[]
}

export function* fetchTodoSaga(action: ProcessCreateTask): Generator<
    CallEffect<Response> | PutEffect<StoreSetNewTodo>,
    void,
    FetchTodoResponse
> {
    const response: FetchTodoResponse = yield call(request, {
        url: 'http://localhost:8080/todo/fetch',
        method: 'get',
        name: 'todo/fetch',
        data: action.payload
    })

    yield put(storeSetNewTodoAction(response.data))
}
