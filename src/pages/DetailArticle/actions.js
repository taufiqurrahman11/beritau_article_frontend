import { GET_DETAIL_ARTICLE, SET_DETAIL_ARTICLE } from "./constants";

export const getDetailArticle = id => ({
    type: GET_DETAIL_ARTICLE,
    id
})

export const setDetailArticle = dataArticle => ({
    type: SET_DETAIL_ARTICLE,
    dataArticle
})
