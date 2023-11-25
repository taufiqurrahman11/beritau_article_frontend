import { createSelector } from "reselect";
import { initialState } from '@pages/Home/reducer';

const selectHomeState = (state) => state.home || initialState

export const selectArticle = createSelector(selectHomeState, (state) => state.article)
export const selectBookmark = createSelector(selectHomeState, (state) => state.bookmark)