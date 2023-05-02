import { SET_IMAGES_IN_STATE } from "./actionTypes"

const initialState = {
    stateImage: []
}

const pdfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES_IN_STATE:
            return {
                ...state,
                selectedImage: action.payLoad
            }

        default:
            return { ...state }
    }
}

export default pdfReducer