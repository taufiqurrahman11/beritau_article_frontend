import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_REGISTER } from './constants'
import { registerSuccess } from './actions'
import { register } from '@domain/api'
import Swal from 'sweetalert2'

export function* doRegister ({ data }) {
    try {
        const response = yield call(register, data)
        if (response) {
            yield put(registerSuccess());
            Swal.fire('Berhasil register, silahkan cek email');
          } else {
            throw new Error('Registrasi gagal');
          }
    } catch (error) {
        console.log(error)
        Swal.fire('Gagal register')
        return
    }
}

export function* registerSaga() {
    yield takeLatest(USER_REGISTER, doRegister)
}