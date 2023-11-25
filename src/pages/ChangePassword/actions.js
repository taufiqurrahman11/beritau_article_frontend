import { CHANGE_PASSWORD, RESET_CHANGE_PASSWORD, SET_CHANGE_PASSWORD } from "./constants"

export const changePassword = data => ({
    type: CHANGE_PASSWORD,
    data
})

export const setChangePassword = () => ({
    type: SET_CHANGE_PASSWORD
})

export const resetChangePassword = () => ({
    type: RESET_CHANGE_PASSWORD
})