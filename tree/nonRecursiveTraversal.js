// class TreeNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

//前序遍历
function preorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            result.push(current.data);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return result;
}

//中序遍历
function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.data);
        current = current.right;
    }
    return result;
}

//后序遍历
function postorderTraversal(root) {
    const result = [];
    const stack = [];
    let lastVisited = null;
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        // 如果右子树为空或者右子树已经被访问过
        if (current.right === null || current.right === lastVisited) {
            result.push(current.data);
            lastVisited = current;
            current = null;
        } else {
            stack.push(current);
            current = current.right;
        }
    }
    return result;
}