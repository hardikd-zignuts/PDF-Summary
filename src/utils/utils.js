export const CheckValidationInField = (data) => {
    // eslint-disable-next-line
    if ((data.name === null || data.name.trim() === '') || (data.startPage === null || data.startPage == 0) || (data.endPage === null || data.endPage == 0)) {
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
    let flag = true
    for (let i = 0; i < data.length; i++) {
        if (!CheckValidationInField(data[i])) {
            flag = false
            break;
        }
    }
    return flag
}

export const IsStartEndPageIncluded = (currentObj, mainDataArr) => {
    for (let i = 0; i < mainDataArr.length; i++) {
        if (currentObj.id !== mainDataArr[i].id) {
            continue;
        }
        if (currentObj.startPage >= mainDataArr[i].startPage && currentObj.endPage <= mainDataArr[i].endPage) {
            return true;
        }
    }
    return false;
} 