import { all, fork } from 'redux-saga/effects'
import LyricsSaga from './LyricsSaga'
import AuthSagas from './AuthSagas'

export default function* rootSaga() {
    yield all([fork(LyricsSaga)])
    yield all([fork(AuthSagas)])
}
