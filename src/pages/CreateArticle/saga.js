import { createArticle } from '@domain/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import { setNewArticle } from './actions'
import { CREATE_ARTICLE } from './constants'

export function* doCreateArticle({data}) {
    try {
        const response = yield call(createArticle, data)
        console.log(response)
        alert('Success create article')
        yield put(setNewArticle(response))
    } catch (error) {
        console.log(error)
        alert('Error create article')
    }
}

export function* createArticleSaga() {
    yield takeLatest(CREATE_ARTICLE, doCreateArticle)
}