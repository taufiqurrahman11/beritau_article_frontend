import { DELETE_ARTICLE, GET_DETAIL_PROFILE, SET_DETAIL_PROFILE } from "./constants";

export const getDetailProfile = () => ({
    type: GET_DETAIL_PROFILE,
})

export const setDetailProfile = detailProfile => ({
    type: SET_DETAIL_PROFILE,
    detailProfile
})

export const deleteAricle = id => ({
    type: DELETE_ARTICLE,
    id
})