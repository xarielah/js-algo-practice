
/**
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    if (arr1.length === 0 || arr2.length === 0) return false;

    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] != arr2[i]) return false;
    }

    return true;
}

module.exports = { compareArrays }