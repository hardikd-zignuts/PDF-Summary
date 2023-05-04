import { DELETE_FIELDS_IN_STATE, RESET_SELECTED_IMAGES, RESET_TEMP_SELECT_IN_STATE, SET_FIELDS_IN_STATE, SET_IMAGES_IN_STATE, SET_TEMP_DATA, UPDATE_FIELDS_IN_STATE, UPDATE_TEMP_SELECT_IN_STATE } from "./actionTypes"


export const setImagesInState = (data) => {
    return {
        type: SET_IMAGES_IN_STATE,
        payLoad: data
    }
}
export const setFieldsInState = (data) => {
    return {
        type: SET_FIELDS_IN_STATE,
        payLoad: data
    }
}
export const deleteFieldsInState = (id) => {
    return {
        type: DELETE_FIELDS_IN_STATE,
        payLoad: id
    }
}
export const updateFieldsInState = (data) => {
    return {
        type: UPDATE_FIELDS_IN_STATE,
        payLoad: data
    }
}
export const updateTempSelect = (data) => {
    return {
        type: UPDATE_TEMP_SELECT_IN_STATE,
        payLoad: data
    }
}
export const resetTempSelect = () => {
    return {
        type: RESET_TEMP_SELECT_IN_STATE,
    }
}
export const setTempData = (id) => {
    return {
        type: SET_TEMP_DATA,
        payLoad: id
    }
}
export const resetSelectedImages = () => {
    return {
        type: RESET_SELECTED_IMAGES,
    }
}