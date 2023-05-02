import { DELETE_FIELDS_IN_STATE, SET_FIELDS_IN_STATE, SET_IMAGES_IN_STATE, UPDATE_FIELDS_IN_STATE } from "./actionTypes"

const initialState = {
    stateImage: [],
    fields: []
}

const pdfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES_IN_STATE:
            return {
                ...state,
                selectedImage: action.payLoad
            }
        case SET_FIELDS_IN_STATE:
            return {
                ...state,
                fields: action.payLoad
            }
        case DELETE_FIELDS_IN_STATE:
            const tempFields = [...state.fields]
            tempFields.splice(action.payLoad, 1)
            return {
                ...state,
                fields: tempFields
            }
        case UPDATE_FIELDS_IN_STATE:
            console.log(action.payLoad)
            return {
                ...state
            }

        default:
            return { ...state }
    }
}

export default pdfReducer