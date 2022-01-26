import { combineReducers } from 'redux'
import lyricsReducer from './LyricsReducer'
import authReducer from './AuthReducer'
import newsReducer from './NewsReducer'
import notificationsReducer from './NotificationsReducer'

const RootReducer = combineReducers({
    lyrics: lyricsReducer,
    auth: authReducer,
    news: newsReducer,
    notifications: notificationsReducer,
})

export type AppState = ReturnType<typeof RootReducer>

export default RootReducer
