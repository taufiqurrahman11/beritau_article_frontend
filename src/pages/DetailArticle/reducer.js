import { produce } from "immer";
import { SET_DETAIL_ARTICLE } from "./constants";
export const initialState = {
    detailArticle: null,
}

const detailArticleReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case SET_DETAIL_ARTICLE:
                draft.detailArticle = action.dataArticle
                break;
        }
    })

export default detailArticleReducer;