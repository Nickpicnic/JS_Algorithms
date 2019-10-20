class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        // add new node to the end of the list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        // removing a node from the end of the Doubly Linked List and return the popped node
        if (!this.length) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        // removing the first node from the list and return shifted node
        if (!this.length) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }
    unshift(val){
        // adding a new node to the beginning of the list and return the whole list
        let newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        // accessing a node in a Doubly Linked List by its position
        if(index < 0 || index >= this.length) return null;
        let middle  = (this.length - 1) / 2,
            counter = 0,
            currentNode;

        if (index < middle) {
            currentNode = this.head;
            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            currentNode = this.tail;
            while(counter !== index){
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }
    set(index, value){
        // replacing the value of the node to the in a Doubly Linked List
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;  
            return true;
        } 
        return false;
    }
    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let previousNode    = this.get(index),
            nextNode        = previousNode.next;
            newNode         = new Node(value);

        previousNode.next = newNode;
        newNode.prev = previousNode;

        newNode.next = nextNode;
        nextNode.prev = newsNode;
            
        this.length++;
        return true;
    }
    remove(index){
        // removing a node in a Doubly Linked List by a certain position
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let deletedNode = get(index),
            prevNode    = deletedNode.prev,
            nextNode    = deletedNode.next;

        prevNode.next = nextNode, nextNode.prev = prevNode;
        deletedNode.prev = null, deletedNode.next = null;
        
        this.length--;
        return deletedNode;
    }

}