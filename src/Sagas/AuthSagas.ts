import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { fetchLogin, fetchRegister } from '@/Services/AuthServices'
import * as actionCreators from '@/ActionCreators/AuthActionCreator'
import * as actionTypes from '@/ActionTypes/AuthActionTypes'

import api from '@/Services'

function* loginCall({ username, password, udid }: actionTypes.LoginAction) {
    const params = {
        username: username,
        password: password,
        udid: udid,
    }
    try {
        const { data } = yield call(fetchLogin, params)
        api.defaults.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        }
        yield put(actionCreators.loginSuccess(data.token, data.refreshToken))
    } catch (error) {
        yield put(actionCreators.loginFailure(error))
    }
}

function* registerCall({
    username,
    password,
    firstname,
    lastname,
    udid,
}: actionTypes.RegisterAction) {
    const params = {
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        udid: udid,
    }
    try {
        const { data } = yield call(fetchRegister, params)
        const { user, token, refreshToken } = data
        api.defaults.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data.token}`,
        }
        yield put(actionCreators.registerSuccess(token, refreshToken, user))
    } catch (error) {
        yield put(actionCreators.registerFailure(error))
    }
}

function* watchOnAuth() {
    yield takeEvery(actionTypes.LOGIN, loginCall)
    yield takeEvery(actionTypes.REGISTER, registerCall)
}

export default function* authSagas() {
    yield all([fork(watchOnAuth)])
}
