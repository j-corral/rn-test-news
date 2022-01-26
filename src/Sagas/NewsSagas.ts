import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchNews } from '@/Services/NewsServices'
import * as actionCreators from '@/ActionCreators/NewsActionCreator'
import * as actionTypes from '@/ActionTypes/NewsActionTypes'

import api from '@/Services'

function* newsCall({ token }: actionTypes.GetNewsAction) {
    const params = {
        token: token,
    }
    try {
        const { data } = yield call(fetchNews, params)
        api.defaults.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        }
        yield put(actionCreators.getNewsSuccess(data))
    } catch (error) {
        yield put(actionCreators.getNewsFailure(error))
    }
}

function* watchOnNews() {
    yield takeEvery(actionTypes.GET_NEWS, newsCall)
}

export default function* newsSagas() {
    yield all([fork(watchOnNews)])
}
