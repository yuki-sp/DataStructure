// 前序遍历
// class Treenode {
//     constructor(data) {
//         this.data = data;
//         this.children = [];
//     }
//     addChild(childNode) {
//         this.children.push(childNode);
//     }
// }

var preOrderTraversal = (node) => {
    const result = [];
    if (node) {
        result.push(node.data);
        for (let child of node.children) {
            preOrderTraversal(child);
        }
    }
}
preOrderTraversal(root);

// 中序遍历
// class TreeNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

var inorderTraversal = (root) => {
    const result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
    }
    traverse(root);
    return result;
}
inorderTraversal(root);

// 后序遍历
// Treenode同中序遍历
// 目前写的都是二叉树，多叉的应该像前序遍历那样搞node，再改动一点就行了
var postorderTraversal = (root) => {
    const result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        traverse(node.left);
        traverse(node.right);
        result.push(node.data);
    }
    traverse(root);
    return result;
}
postorderTraversal(root);