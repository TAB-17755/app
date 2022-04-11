import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux'
import {
    useSelector,
    useDispatch,
    TypedUseSelectorHook
} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

export const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
    )
)

export const configureStore = () => {
    sagaMiddleware.run(rootSaga)
    return store
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
