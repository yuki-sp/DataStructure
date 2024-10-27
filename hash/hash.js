class HashTable {
    constructor() {
        this.keyMap = new Array();
    }

    // 哈希函数
    // gpt的，想不出什么比较好的能减少较多碰撞的函数
    hashFunction(key) {
        let total = 0;
        const PRIME = 31; // 使用一个素数来减少碰撞
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // 插入或更新键值对
    set(key, value) {
        const index = this.hashFunction(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // 检查是否已存在相同键的键值对，若存在则更新
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value;
                return;
            }
        }
        // 若不存在，则插入新的键值对
        this.keyMap[index].push([key, value]);
    }

    // 获取键对应的值
    get(key) {
        const index = this.hashFunction(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined; // 未找到该键
    }

    // 删除键值对
    delete(key) {
        const index = this.hashFunction(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1); // 删除该键值对
                    return true; // 删除成功
                }
            }
        }
        return false; // 未找到该键
    }

    // 修改指定键的值
    update(key, value) {
        const index = this.hashFunction(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index][i][1] = value; // 更新值
                    return true; // 更新成功
                }
            }
        }
        return false; // 未找到需要更新的键
    }
}
