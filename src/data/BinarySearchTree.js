import Node from './Node';

class BinarySearchTree {
    #root

    constructor(){
        this.#root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.#root == null) { 
            this.#root = newNode;
        } else {
            this.insertNode(this.#root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) { 
            if (node.left == null) { 
                node.left = newNode; 
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (node.right == null) { 
                node.right = newNode; 
            } else {
                this.insertNode(node.right, newNode);
            }
    }

    search(value) {
        return this.searchNode(this.#root, value);
    }
     
    searchNode(node, value) {
        if (node === null || node.value === value) {
          return node;
        } else if (value < node.value) {
            this.searchNode(node.left, value);
        } else {
            this.searchNode(nodo.right, value);
        }
    }

    remove(value) {
        this.#root = this.removeNode(this.#root, value);
    }

    removeNode(node, value) {
        if (node == null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // value is equal to node.item
            // case 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            
            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // case 3
            const aux = this.minNode(node.right);
            node.value = aux.value;
            node.right = this.removeNode(node.right, aux.value);
            return node;
        }
    }


    min() {
        return this.minNode(this.#root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) { 
            current = current.left; 
        }
        return current;
    }

    max() {
        return this.maxNode(this.#root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.#root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { 
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value); 
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.#root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.value); 
            this.preOrderTraverseNode(node.left, callback); 
            this.preOrderTraverseNode(node.right, callback); 
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.#root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback); 
            callback(node.value); 
        }
    }
}