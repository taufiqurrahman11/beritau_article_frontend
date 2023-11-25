import { createSelector } from "reselect";
import { initialState } from '@pages/DetailArticle/reducer';

const selectDetailState = (state) => state.detail || initialState

export const selectDetail = createSelector(selectDetailState, (state) => state.detailArticle)
