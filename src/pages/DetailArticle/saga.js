import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_DETAIL_ARTICLE } from './constants'
import { getArticleById } from '@domain/api'
import { setDetailArticle } from './actions'

export function* doGetDetailArticle({ id }) {
    try {
        const response = yield call(getArticleById, id)
        // console.log(response,' <<<<<<<<<<< ID')
        yield put(setDetailArticle(response))
    } catch (error) {
        console.log(error)
    }
}

export function* detailArticleSaga() {
    yield takeLatest(GET_DETAIL_ARTICLE, doGetDetailArticle)
}