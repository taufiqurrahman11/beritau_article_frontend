import { deleteArticle, getProfileById } from '@domain/api'
import { call, put, takeLatest } from 'redux-saga/effects'
import { setDetailProfile } from './actions'
import { DELETE_ARTICLE, GET_DETAIL_PROFILE } from './constants'

export function* doGetDetailProfile() {
    try {
        const response = yield call(getProfileById)
        console.log(response, '<<< Profile ID')
        yield put(setDetailProfile(response))
    } catch (error) {
        console.log(error)
    }
}

export function* doDeleteArticle({id}) {
    try {
        const response = yield call(deleteArticle, id)
        alert('Success delete article')
        const fetchAgain = yield call(getProfileById)
        yield put(setDetailProfile(fetchAgain))        
    } catch (error) {
        console.log(error)
    }
}

export function* detailProfileSaga() {
    yield takeLatest(GET_DETAIL_PROFILE, doGetDetailProfile)
    yield takeLatest(DELETE_ARTICLE, doDeleteArticle)
}