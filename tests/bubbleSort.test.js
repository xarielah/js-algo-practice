const bubbleSort = require("../algos/bubbleSort");
const { compareArrays } = require("../utils");

test("bubbleSort", () => {
    const array = [3, 2, 16, 9, 43];
    const expected = [2, 3, 9, 16, 43]
    expect(compareArrays(bubbleSort(array), expected)).toBeTruthy();

    const anotherArray = [300, 52, -7, 8, 18, 2, 93, 100, -250, 40];
    const anotherExpected = [-250, -7, 2, 8, 18, 40, 52, 93, 100, 300]
    expect(compareArrays(bubbleSort(anotherArray), anotherExpected)).toBeTruthy();

    const oneMoreArray = [300, 52, -7, 8, 18, 2, 93, 100, -250, 40];
    const oneMoreExpected = [-250, -7, 2, 8, 18, 40, 52, 93, 100, 300, 400]
    expect(compareArrays(bubbleSort(oneMoreArray), oneMoreExpected)).toBeFalsy();

    const oneMoreAnotherArray = [];
    const oneMoreAnotherExpected = [-250, -7, 2, 8, 18, 40, 52, 93, 100, 300, 400]
    expect(compareArrays(bubbleSort(oneMoreAnotherArray), oneMoreAnotherExpected)).toBeFalsy();
})