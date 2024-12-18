var heapSort = function(nums) {
    const nl = nums.length
    // 交换
    const swap = (max, n) => {
        const t = nums[max]
        nums[max] = nums[n]
        nums[n] = t
    }
    // 建立最大堆
    const heapify = (n, length) => {
        const l = 2 * n + 1, r = l + 1
        let max = n
        if (l < length && nums[l] > nums[max]) max = l
        if (r < length && nums[r] > nums[max]) max = r
        if (max != n) {
            swap(max, n)
            // 递归以下节点，维护最大堆
            heapify(max, length)
        }
    }
    // 建立堆
    for (let i = Math.floor(nl/2) - 1; i >= 0; i--)
        heapify(i, nl)
    // 排序
    for (let i = nl - 1; i >= nl - k; i--) {
        // 最大的与最后一个交换位置
        swap(0, i)
        // 维护最大堆
        heapify(0, i)
    }
};
// 时间O(nlogn)
// 空间O(1)
// 不稳定 
