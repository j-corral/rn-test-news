/* eslint-disable prettier/prettier */
import * as actions from '@/ActionTypes/NotificationsActionTypes'
import { Notification } from '@/Models'

export interface NotificationsState {
    notifications?: Notification[]
    isLoading?: boolean
    error?: any
}

const initialState: NotificationsState = {
    notifications: [],
    isLoading: false,
    error: null,
}

export default function authReducer(
    state: NotificationsState = initialState,
    action: actions.NotificationsActions,
): NotificationsState {
    switch (action.type) {
    case actions.GET_NOTIFICATIONS:
        return {
            isLoading: true,
            error: null,
            notifications: [],
        }
    case actions.GET_NOTIFICATIONS_SUCCESS:
        return {
            isLoading: false,
            error: null,
            notifications: action.notifications,
        }
    case actions.GET_NOTIFICATIONS_FAILURE:
        return {
            isLoading: false,
            error: action.error,
            notifications: [],
        }
    default:
        return state
    }
}
