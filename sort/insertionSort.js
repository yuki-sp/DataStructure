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
// let a = [5, 4, 3, 2, 1];
// b = insertionSort(a);
// console.log(b);

