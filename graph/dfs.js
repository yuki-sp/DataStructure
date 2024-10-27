class Graph {
    constructor() {
        this.adjacencyList = {}; // 邻接表表示的图
    }

    // 添加顶点
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // 添加有向边
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
        }
    }

    // DFS
    DFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

   
}
