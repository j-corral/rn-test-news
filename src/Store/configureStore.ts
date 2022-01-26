import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '@/Reducers/RootReducer'
import rootSaga from '@/Sagas/RootSaga'
import { LyricsState } from '@/reducers/LyricsReducer'
import { AuthState } from '@/reducers/AuthReducer'
import { NewsState } from '@/reducers/NewsReducer'
import { NotificationsState } from '@/reducers/NotificationsReducer'

const sagaMiddleware = createSagaMiddleware()

export interface StoreState {
    lyrics: LyricsState
    auth: AuthState
    news: NewsState
    notifications: NotificationsState
}

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore
