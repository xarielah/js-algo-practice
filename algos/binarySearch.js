/**
 * Gets an array of numbers, a target, and returns it's index
 * @param {number[]} array 
 * @param {number} target
 * @returns {number} index
 */
module.exports = function binarySearch(array, target) {
    let left = 0, right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] > target) {
            right = middle - 1;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
}