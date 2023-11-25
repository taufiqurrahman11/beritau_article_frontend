import { deleteFromBookmark, getAllBookmark } from '@domain/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import { setAllBookmark } from './actions'
import { DELETE_FROM_BOOKMARK, GET_ALL_BOOKMARK } from './constants'

export function* doGetAllBookmark () {
    try {
        const response = yield call(getAllBookmark)
        yield put(setAllBookmark(response))
    } catch (error) {
        console.log(error)
        alert('Fetching bookmark failed')
    }
}

export function* doDeleteFromBookmark({articleId}) {
    try {
        const response = yield call(deleteFromBookmark, articleId)
        alert('Success delete bookmark');
        const fetchAgain = yield call(getAllBookmark)
        yield put(setAllBookmark(fetchAgain))
        console.log(response)
    } catch (error) {
        console.log(error)
        // alert('Delete bookmark failed')
    }
}

export function* bookmarkSaga() {
    yield takeLatest(GET_ALL_BOOKMARK, doGetAllBookmark)
    yield takeLatest(DELETE_FROM_BOOKMARK, doDeleteFromBookmark)
}