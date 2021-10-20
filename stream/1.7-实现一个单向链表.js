class Node {
  constructor(element, next) {
    this.element = element
    this.next = next
  }
}


class LinkedList {
  constructor(head, size) {
    this.head = null
    this.size = 0
  }

  _getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('cross the border')
    }

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  add(index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }

    if (index < 0 || index > this.size) {
      throw new Error('coress the border')
    }

    if (index === 0) {
      this.head = new Node(element, null)
    } else {
      let preNode = this._getNode(index - 1)
      preNode.next = new Node(element, preNode.next)
    }

    this.size++
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      throw new Error('coress the border')
    }

    let rmNode = null

    if (index === 0) {
      let rmNode = this.head

      if (!rmNode) return

      this.head = rmNode.next
    } else {
      let preNode = this._getNode(index - 1)
      rmNode = preNode.next
      preNode.next = rmNode.next
    }

    this.size--

    return rmNode
  }

  update(index, element) {
    let node = this._getNode(index)
    node.element = element
  }

  get(index) {
    return this._getNode(index)
  }

  clear() {
    this.head = null
    this.size = 0
  }
}

// let link = new LinkedList()

// link.add('node1')
// link.add('node2')
// link.add(1, 'node11')

// console.log(link)

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  enQueue(data) {
    this.list.add(data)
  }

  deQueue() {
    return this.list.remove(0)
  }
}

let q = new Queue()

q.enQueue('node1')
q.enQueue('node2')
q.enQueue('node3')
let a = q.deQueue()

console.log(q)
console.log(a)