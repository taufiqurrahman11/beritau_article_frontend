import { createSelector } from "reselect";
import { initialState } from '@pages/Bookmark/reducer';

const selectBookmarkState = (state) => state.bookmark || initialState

export const selectBookmark = createSelector(selectBookmarkState, (state) => state.bookmark)
