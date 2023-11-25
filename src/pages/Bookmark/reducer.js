import { produce } from 'immer'
import { SET_ALL_BOOKMARK } from './constants'

export const initialState = {
    bookmark: [],
    isSuccess: false
}

const bookmarkReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case SET_ALL_BOOKMARK:
                draft.bookmark = action.bookmark.data
                draft.isSuccess = true
                break
        }
    })  

export default bookmarkReducer