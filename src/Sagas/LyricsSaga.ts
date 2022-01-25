import { put, call, takeEvery, all, fork } from 'redux-saga/effects'

import { fetchLyrics } from '../Services/LyricsServices'
import * as actionCreators from '../ActionCreators/LyricsActionCreators'
import * as actionTypes from '../ActionTypes/LyricsActionTypes'

function* onLoadLyrics({ artist, song }: actionTypes.GetLyricsAction) {
    try {
        yield put(actionCreators.getLyricsRequest())
        const { data } = yield call(fetchLyrics, artist, song)
        yield put(actionCreators.getLyricsSuccess(data.lyrics))
    } catch (error) {
        yield put(actionCreators.getLyricsFailure(error.response.data.error))
    }
}

function* watchOnLoadLyrics() {
    yield takeEvery(actionTypes.GET_LYRICS, onLoadLyrics)
}

export default function* lyricsSaga() {
    yield all([fork(watchOnLoadLyrics)])
}
