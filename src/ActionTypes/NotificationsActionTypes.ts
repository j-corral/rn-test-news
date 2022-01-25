import { Notification } from '@/Models'

export const GET_NOTIFICATIONS = 'NotificationsActionTypes/GET_NOTIFICATIONS'
export interface GetNotificationsAction {
    type: typeof GET_NOTIFICATIONS
    page: number
    limit: number
}

export const GET_NOTIFICATIONS_SUCCESS =
    'NotificationsActionTypes/GET_NOTIFICATIONS_SUCCESS'
export interface GetNotificationsSuccessAction {
    type: typeof GET_NOTIFICATIONS_SUCCESS
    notifications: Notification[]
}

export const GET_NOTIFICATIONS_FAILURE =
    'NotificationsActionTypes/GET_NOTIFICATIONS_FAILURE'
export interface GetNotificationsFailureAction {
    type: typeof GET_NOTIFICATIONS_FAILURE
    error: Error | string
}

export type NotificationsActions =
    | GetNotificationsAction
    | GetNotificationsSuccessAction
    | GetNotificationsFailureAction
