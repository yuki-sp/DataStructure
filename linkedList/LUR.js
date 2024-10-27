// 不会
// 以下是gpt的结果(
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 缓存的最大容量
        this.map = new Map();     // 键到节点的映射
        this.head = new ListNode(); // 虚拟头节点
        this.tail = new ListNode(); // 虚拟尾节点
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // 获取缓存中的值
    get(key) {
        if (!this.map.has(key)) {
            return -1; // 缓存中没有该值
        }
        const node = this.map.get(key);
        this.moveToHead(node); // 将节点移到链表头部（表示最近使用）
        return node.value;
    }

    // 将键值对插入缓存
    put(key, value) {
        if (this.map.has(key)) {
            // 更新已有节点的值，并移到链表头部
            const node = this.map.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            // 创建新节点
            const newNode = new ListNode(key, value);
            this.map.set(key, newNode);
            this.addToHead(newNode);

            if (this.map.size > this.capacity) {
                // 超出容量，移除链表尾部节点
                const tail = this.removeTail();
                this.map.delete(tail.key);
            }
        }
    }

    // 将节点添加到链表头部
    addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    // 将节点移到链表头部
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }

    // 移除节点
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // 移除链表尾部节点
    removeTail() {
        const tail = this.tail.prev;
        this.removeNode(tail);
        return tail;
    }
}
