import {
    CREATE_REQUEST,
    SET_REQUEST_SUCCESS,
    SET_REQUEST_FAILURE,
    REMOVE_REQUEST,
} from './types'

import { RequestState, RequestAction, Request } from './interfaces'

const getNewRequest = (
    prevRequest: Request, status?: Request['status'], error?: Request['error']
): Request => ({
    ...prevRequest,
    status: status ? status : prevRequest.status,
    error: error ? error : prevRequest.error,
})

export const initialState: RequestState = []

export function requestReducer(state = initialState, action: RequestAction) {
    switch (action.type) {
        case CREATE_REQUEST:
            return [
                ...state,
                getNewRequest({
                    id: action.payload.id,
                    type: action.payload.type,
                    status: 'processing',
                    error: undefined,
                })
            ]
        case SET_REQUEST_SUCCESS:
            return state.map(request => {
                if (request.id === action.payload) return getNewRequest(request, 'success')
                return request
            })
        case SET_REQUEST_FAILURE:
            return state.map(request => {
                if (request.id === action.payload.id) return getNewRequest(request, 'failure', action.payload.error)
                return request
            })
        case REMOVE_REQUEST:
            return state.filter(request => request.id !== action.payload)
        default:
            return state
    }
}