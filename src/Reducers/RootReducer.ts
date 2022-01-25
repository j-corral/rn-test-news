import { combineReducers } from 'redux'
import lyricsReducer from './LyricsReducer'
import authReducer from './AuthReducer'
import notificationsReducer from './NotificationsReducer'

const RootReducer = combineReducers({
    lyrics: lyricsReducer,
    auth: authReducer,
    notifications: notificationsReducer,
})

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
