import { changePassword } from '@domain/api'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { resetChangePassword, setChangePassword } from './actions'
import { CHANGE_PASSWORD } from './constants'

export function* doChangePassword({data}) {
    try {
        const response = yield call(changePassword, data)
        yield put(setChangePassword(response))
        console.log(response)
        alert('Change password success')

        yield delay(2000)
        yield put(resetChangePassword())
    } catch (error) {
        console.log(error)
        alert('Error change password')
    }
}

export function* changePasswordSaga() {
    yield takeLatest(CHANGE_PASSWORD, doChangePassword)
}