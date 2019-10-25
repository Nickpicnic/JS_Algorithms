class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(!root){
            this.root = newNode;
            return this;
        } else {
            let curNode = this.root;
            while(true){
                if(value === curNode.value) return undefined;
                if(value < curNode.value){
                    if(!current.left){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if(value > curNode.value) {
                    if(!current.right){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value){
        if(!root) return false;
        let curNode = this.root;
        while(curNode){
            if(curNode.value === value) {
                return true;
            }
            if(curNode.value < value){
                curNode = curNode.right;
            }else{
                curNode = curNode.left;
            }
        }
        return false;
    }
    BFS(){
        let node    = this.root,
            data    = [],
            queue   = [];
            
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}