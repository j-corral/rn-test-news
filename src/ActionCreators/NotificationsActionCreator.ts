import * as actions from '@/ActionTypes/NotificationsActionTypes'
import { Notification } from '@/Models'

export function getNotifications(
    page: number,
    limit: number,
): actions.GetNotificationsAction {
    return {
        type: actions.GET_NOTIFICATIONS,
        page,
        limit,
    }
}

export function getNotificationsSuccess(
    notifications: Notification[],
): actions.GetNotificationsSuccessAction {
    return {
        type: actions.GET_NOTIFICATIONS_SUCCESS,
        notifications,
    }
}

export function getNotificationsFailure(
    error: Error | string,
): actions.GetNotificationsFailureAction {
    return {
        type: actions.GET_NOTIFICATIONS_FAILURE,
        error,
    }
}
