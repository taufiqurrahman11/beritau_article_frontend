import { produce } from 'immer'
import { RESET_CHANGE_PASSWORD, SET_CHANGE_PASSWORD } from './constants'

export const initialState = {
    isChange: false
}

const changePasswordReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case SET_CHANGE_PASSWORD:
                draft.isChange = true
                break
            case RESET_CHANGE_PASSWORD:
                draft.isChange = false
                break
        }
    })

export default changePasswordReducer