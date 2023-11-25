import { produce } from 'immer'
import { SET_NEW_ARTICLE } from './constants'

export const initialState = {
    createArticleStatus: false
}

const createArticleReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case SET_NEW_ARTICLE:
                draft.createArticleStatus = true
                break
        }
    })

export default createArticleReducer