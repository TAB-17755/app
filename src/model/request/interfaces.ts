import {
    CREATE_REQUEST,
    SET_REQUEST_SUCCESS,
    SET_REQUEST_FAILURE,
    REMOVE_REQUEST,
} from './types'

export interface Request {
    id: number
    type: string
    status: 'processing' | 'success' | 'failure'
    error?: string
}

export interface RequestState extends Array<Request> {}

export interface CreateRequest {
    type: typeof CREATE_REQUEST
    payload: {
        id: Request['id']
        type: Request['type']
    }
}

export interface SetRequestSuccess {
    type: typeof SET_REQUEST_SUCCESS
    payload: Request['id']
}

export interface SetRequestFailure {
    type: typeof SET_REQUEST_FAILURE
    payload: {
        id: Request['id']
        error: Request['error']
    }
}

export interface RemoveRequest {
    type: typeof REMOVE_REQUEST
    payload: Request['id']
}

export type RequestAction =
    | CreateRequest
    | SetRequestSuccess
    | SetRequestFailure
    | RemoveRequest