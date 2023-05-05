import ImageData from "../constant/ImageData"
import { DELETE_FIELDS_IN_STATE, RESET_SELECTED_IMAGES, RESET_TEMP_SELECT_IN_STATE, SET_FIELDS_IN_STATE, SET_IMAGES_IN_STATE, SET_TEMP_DATA, SET_VALID_STATUS, UPDATE_FIELDS_IN_STATE, UPDATE_TEMP_SELECT_IN_STATE } from "./actionTypes"

const initialState = {
    stateImage: [],
    selectTempData: [],
    fields: [],
    resetImage: false,
    validStatus: false
}

const pdfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES_IN_STATE:
            return {
                ...state,
                stateImage: action.payLoad
            }
        case SET_FIELDS_IN_STATE:
            return {
                ...state,
                fields: action.payLoad
            }
        case DELETE_FIELDS_IN_STATE:
            const tempFields = [...state.fields]
            tempFields.splice(tempFields.findIndex(ele => ele.id === action.payLoad), 1)
            return {
                ...state,
                fields: tempFields
            }
        case UPDATE_FIELDS_IN_STATE:
            let startPageNumber = parseInt(action.payLoad.startPage.trim())
            let endPageNumber = parseInt(action.payLoad.endPage.trim())

            let tempArr = [...state.fields]
            tempArr[action.payLoad.id] = {
                ...action.payLoad,
                startPage: startPageNumber,
                endPage: endPageNumber
            }
            return {
                ...state,
                fields: tempArr
            }
        case UPDATE_TEMP_SELECT_IN_STATE:
            const { startPage, endPage } = action.payLoad
            let temp = ImageData.slice(startPage - 1, endPage)
            return {
                ...state,
                stateImage: temp
            }
        case RESET_TEMP_SELECT_IN_STATE:
            return {
                ...state,
                stateImage: []
            }
        case SET_TEMP_DATA:
            let arr1 = []
            const element = [...state.fields].find(ele => ele.id === action.payLoad.id)
            if (element) {
                arr1 = ImageData.slice(element.startPage - 1, element.endPage)
            }
            return {
                ...state,
                selectTempData: arr1
            }
        case RESET_SELECTED_IMAGES:
            return {
                ...state,
                resetImage: !state.resetImage
            }
        case SET_VALID_STATUS:
            return {
                ...state,
                validStatus: action.payLoad
            }

        default:
            return { ...state }
    }
}

export default pdfReducer