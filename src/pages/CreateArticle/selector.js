import { createSelector } from "reselect";
import { initialState } from '@pages/Profile/reducer';

const selectCreateArticleState = (state) => state.createArticle || initialState

export const selectCreateArticle = createSelector(selectCreateArticleState, (state) => state.createArticle)
