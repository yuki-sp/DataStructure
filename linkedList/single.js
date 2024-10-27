class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // 在链表的开头插入节点
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // 在链表的末尾插入节点
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // 删除指定值的节点
    deleteNode(data) {
        if (!this.head) return;

        // 如果要删除的是头节点
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        // 如果找到了要删除的节点
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // 查找包含指定值的节点
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true; // 找到节点
            }
            current = current.next;
        }
        return false; // 未找到节点
    }

    // 修改指定节点的值
    updateNode(oldData, newData) {
        let current = this.head;
        while (current) {
            if (current.data === oldData) {
                current.data = newData; // 更新节点数据
                return true; // 更新成功
            }
            current = current.next;
        }
        return false; // 未找到需要更新的节点
    }
}

