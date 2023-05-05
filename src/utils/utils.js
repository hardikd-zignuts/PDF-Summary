export const CheckValidationInField = (data) => {
    if (data.name === null || data.startPage === null || data.endPage === null) {
        return false
    } else {
        return true
    }
}

export const GetMinAndMaxId = (arr) => {
    let minNumber = Infinity;
    let maxNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const id = arr[i].id;
        const number = parseInt(id.slice(1), 10);
        if (number < minNumber) {
            minNumber = number;
        }
        if (number > maxNumber) {
            maxNumber = number;
        }
    }
    return {
        min: minNumber,
        max: maxNumber
    }

}


export const CheckValidationForButton = (data) => {
    return data.some((item) => (item.startPage !== null || item.endPage !== null))
}
