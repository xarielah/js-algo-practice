const binarySearch = require("../algos/binarySearch")

test('binarySearch', () => {
    const array = [1, 10, 42, 200, 400, 2420, 34020, 104030];
    expect(binarySearch(array, 2420)).toBe(5);
    expect(binarySearch(array, 104030)).toBe(array.length - 1);
    expect(binarySearch(array, 200)).toBe(3);
    expect(binarySearch(array, -1000)).toBe(-1);

    const emptyArray = [];
    expect(binarySearch(emptyArray, -5436456)).toBe(-1);
})