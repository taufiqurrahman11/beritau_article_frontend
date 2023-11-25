import { produce } from "immer";
import { SET_DETAIL_PROFILE } from "./constants";
export const initialState = {
    detailProfile: null,
}

const detailProfileReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case SET_DETAIL_PROFILE:
                draft.detailProfile = action.detailProfile;
                break;
        }
    })

export default detailProfileReducer;