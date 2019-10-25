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
}