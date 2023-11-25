import { DELETE_FROM_BOOKMARK, GET_ALL_BOOKMARK, SET_ALL_BOOKMARK } from "./constants";

export const getAllBookmark = () => ({
    type: GET_ALL_BOOKMARK
})

export const setAllBookmark = bookmark => ({
    type: SET_ALL_BOOKMARK,
    bookmark
})

export const deleteFromBookmark = articleId => ({
    type: DELETE_FROM_BOOKMARK,
    articleId
})