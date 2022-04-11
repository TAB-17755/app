import { useAppSelector } from '../store'

export const todoRequestSelector = () => useAppSelector(state => (
    state.request.filter(request => {
        if (request.type.includes('todo')) return request
    })
))
