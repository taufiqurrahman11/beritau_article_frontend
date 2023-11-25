import { CREATE_ARTICLE, SET_NEW_ARTICLE } from "./constants"

export const createArticle = data => ({
    type: CREATE_ARTICLE,
    data
})

export const setNewArticle = () => ({
    type: SET_NEW_ARTICLE
})