import { ADD_TO_BOOKMARK, GET_ALL_ARTICLE, SET_ALL_ARTICLE, SET_ALL_BOOKMARK } from "./constants"

export const getAllArticle = () => ({
    type: GET_ALL_ARTICLE
})
export const setAllArticle = article => ({
    type: SET_ALL_ARTICLE,
    article
})

export const setAllBookmark = data => ({
    type: SET_ALL_BOOKMARK,
    data
})

export const addToBookmark = articleId => ({
    type: ADD_TO_BOOKMARK,
    articleId
})