// 这玩意儿有点抽象，没太懂(gpt)
class UnionFind {
    constructor(size) {
        // 初始化每个元素的父节点为其自身
        this.parent = new Array(size).fill(0).map((_, index) => index);
        this.rank = new Array(size).fill(1); // 用于按秩合并
    }

    // 查找操作：查找元素的根节点
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // 路径压缩
        }
        return this.parent[x];
    }

    // 合并操作：合并两个集合
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            // 按秩合并
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }

    // 查找某元素所在的集合（返回根节点）
    getSet(x) {
        return this.find(x);
    }
}
