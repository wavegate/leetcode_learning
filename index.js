class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root ? root : null;
    }
}

const x = new Node(3);
console.log(x);