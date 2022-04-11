import { store } from '../model/store'
import axios, { AxiosRequestConfig } from 'axios'
import {
    createRequestAction,
    setRequestSuccessAction,
    setRequestFailureAction,
    removeRequestAction,
} from '../model/request'

export interface Request extends AxiosRequestConfig {
    name: string
}

export interface Response {
    error: boolean
    message: string
}

export const request = async (request: Request): Promise<Response> => {
    const requestId = Date.now()
    store.dispatch(createRequestAction({
        id: requestId,
        type: request.name,
    }))

    return new Promise((resolve, reject) => {
        axios({
            method: request.method,
            url: request.url,
            data: request.data,
            headers: request.headers,
            params: request.params
        }).then(
            response => {
                store.dispatch(setRequestSuccessAction(requestId))
                store.dispatch(removeRequestAction(requestId))
                resolve(response.data)
            },
            error => {
                store.dispatch(setRequestFailureAction({
                    id: requestId,
                    error: '',
                }))
                store.dispatch(removeRequestAction(requestId))
                reject(error)
            }
        )
    })
}
