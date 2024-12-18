function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    // 分割数组
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
  
    // 递归调用归并排序对左右子数组进行排序
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // 比较左右子数组元素，将较小的元素放入结果数组
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // 将剩余的元素添加到结果数组
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
// 时间O(nlogn)
// 空间O(n)
// 稳定 