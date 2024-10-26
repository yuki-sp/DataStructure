var insertionSort = function (array) {
    const len = array.length;
    let result = [];
    result.push(array[0]);
    for (let i = 1; i < len; i++) {
        let now = array[i];
        j = i - 1;
        while (j >= 0 && now < result[j]) {
            j--;
        }
        result.splice(j + 1, 0, now);        
    }

    return result;
}
// 空间复杂度O(n)
// 时间复杂度O(n^2)
// 稳定
var insertionSort = function (array) {
    const len = array.length;
    for (let i = 1; i < len; i++) {
        let now = array[i];
        let j = i - 1;
        while (j >= 0 && now < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = now;
    }
    return array;
}
// 空间复杂度O(1)
// 时间复杂度O(n^2)
// 稳定