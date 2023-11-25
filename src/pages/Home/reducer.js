import { produce } from 'immer';
import { SET_ALL_ARTICLE, SET_ALL_BOOKMARK } from './constants';

export const initialState = {
    article: [],
    bookmark: [],
    isBookmarked: false,
    isSuccess: false
}

const homeReducer = (state = initialState, action) =>
    produce(state, draft =>{
        switch(action.type) {
            case SET_ALL_ARTICLE:
                draft.article = action.article
                draft.isSuccess = true
                break;
            case SET_ALL_BOOKMARK:
                draft.bookmark = action.bookmark
                draft.isBookmarked = true
                break;
        }
    })

export default homeReducer;