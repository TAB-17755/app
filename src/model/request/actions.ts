import {
    CREATE_REQUEST,
    SET_REQUEST_SUCCESS,
    SET_REQUEST_FAILURE,
    REMOVE_REQUEST,
} from './types'

import { 
    CreateRequest, 
    SetRequestSuccess, 
    SetRequestFailure, 
    RemoveRequest,
} from './interfaces'

export const createRequestAction = (payload: CreateRequest['payload']): CreateRequest => ({
    type: CREATE_REQUEST,
    payload
})

export const setRequestSuccessAction = (payload: SetRequestSuccess['payload']): SetRequestSuccess => ({
    type: SET_REQUEST_SUCCESS,
    payload
})

export const setRequestFailureAction = (payload: SetRequestFailure['payload']): SetRequestFailure => ({
    type: SET_REQUEST_FAILURE,
    payload
})

export const removeRequestAction = (payload: RemoveRequest['payload']): RemoveRequest => ({
    type: REMOVE_REQUEST,
    payload
})
