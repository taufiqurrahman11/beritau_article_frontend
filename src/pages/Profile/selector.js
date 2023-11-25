import { createSelector } from "reselect";
import { initialState } from '@pages/Profile/reducer';

const selectProfileState = (state) => state.profile || initialState

export const selectDetailProfile = createSelector(selectProfileState, (state) => state.detailProfile)
