/**
 * Gets an unsorted array and returns it sorted
 * @param {number[]} array 
 * @returns {number[]} sorted array
 */
module.exports = function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - (i + 1); ++j) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return array;
}