import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchNotifications } from '@/Services/NotificationsServices'
import * as actionCreators from '@/ActionCreators/NotificationsActionCreator'
import * as actionTypes from '@/ActionTypes/NotificationsActionTypes'

function* getNotificationsCall({
    page,
    limit,
}: actionTypes.GetNotificationsAction) {
    try {
        const {
            data: { items },
        } = yield call(fetchNotifications, page, limit)
        yield put(actionCreators.getNotificationsSuccess(items))
    } catch (error) {
        yield put(actionCreators.getNotificationsFailure(error))
    }
}

function* watchOnNotifications() {
    yield takeEvery(actionTypes.GET_NOTIFICATIONS, getNotificationsCall)
}

export default function* notificationsSagas() {
    yield all([fork(watchOnNotifications)])
}
