import { DELETE_FIELDS_IN_STATE, SET_FIELDS_IN_STATE, SET_IMAGES_IN_STATE, UPDATE_FIELDS_IN_STATE } from "./actionTypes"


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