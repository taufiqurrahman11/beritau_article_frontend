import { call, put, takeLatest } from 'redux-saga/effects'
import { login } from '@domain/api'
import Swal from 'sweetalert2'
import { setLogin, setToken, setUser } from '@containers/Client/actions'
import { LOGIN_USER } from '@containers/Client/constants'

export function* doLogin ({ data }) {
    try {
        const response = yield call(login, data)
        console.log(response)
        if (!response) {
            Swal.fire('Invalid email and password')
        } else {
            yield put(setUser(response.data))
            yield put(setToken(response.token))
            yield put(setLogin(true))
            Swal.fire('Login success')
        }
    } catch (error) {
        console.log(error)
        Swal.fire('Login failed')
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_USER, doLogin)
}