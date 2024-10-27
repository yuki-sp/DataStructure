class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 在链表的开头插入节点
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // 如果链表为空
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 插入到头节点之前
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // 在链表的末尾插入节点
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            // 如果链表为空
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 插入到尾节点之后
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // 删除指定值的节点
    deleteNode(data) {
        // 如果要删除的是头节点
        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // 如果删除后链表为空
            }
            return;
        }

        // 如果要删除的是尾节点
        if (this.tail.data === data) {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null; // 如果删除后链表为空
            }
            return;
        }

        // 删除中间节点
        else {
            let current = this.head;
            while (current) {
                if (current.data === data) {
                    current.prev.next = current.next;
                    if (current.next) {
                        current.next.prev = current.prev;
                    }
                    return;
                }
                current = current.next;
            }
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
