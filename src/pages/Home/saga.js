import { addToBookmark, getAllArticle } from '@domain/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import { setAllArticle, setAllBookmark } from './actions'
import { ADD_TO_BOOKMARK, GET_ALL_ARTICLE } from './constants'

export function* doGetAllArticle() {
    try {
        const response = yield call(getAllArticle)
        yield put(setAllArticle(response))
        console.log(response)
    } catch (error) {
        console.log(error.message)
    }
}

export function* doAddToBookmark({articleId}) {
    try {
        const response = yield call(addToBookmark, articleId)
        alert('Success add to bookmark')
        yield put(setAllBookmark(response))
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export function* homeSaga() {
    yield takeLatest(GET_ALL_ARTICLE, doGetAllArticle)
    yield takeLatest(ADD_TO_BOOKMARK, doAddToBookmark)
}