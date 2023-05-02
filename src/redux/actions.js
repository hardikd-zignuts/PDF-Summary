import { SET_IMAGES_IN_STATE } from "./actionTypes"


export const setImagesInState = (data) => {
    return {
        type: SET_IMAGES_IN_STATE,
        payLoad: data
    }
}