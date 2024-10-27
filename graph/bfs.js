class Graph {
    constructor() {
        this.list = {};
    }

    // 添加顶点
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = [];
        }
    }

    // 添加有向边
    addEdge(v1, v2) {
        if (this.list[v1] && this.list[v2]) {
            this.list[v1].push(v2);
        }
    }

    // BFS
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const current = queue.shift();
            result.push(current);

            this.list[current].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}
