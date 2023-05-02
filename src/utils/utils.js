export const CheckValidationInField = (data) => {
    if (data.name === '' || data.startPage === null || data.endPage === null) {
        return false
    } else {
        return true
    }
}