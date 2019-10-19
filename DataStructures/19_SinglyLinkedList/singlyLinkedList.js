// piece of data - val
// reference to next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // add a new node to the end and return the whole list
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        // remove and return the last node
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(!this.length){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        //remove and return the first node
        if(!this.head) return undefined;
        let shiftHead = this.head;
        this.head = this.head.next;;
        this.length--;
        if(!this.length){
            this.tail = null;
        }
        return shiftHead;
    }
    unshift(val){
        // add a new node to the beginning and return the whole list
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head; 
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(n){
        // return nth node from the list (count from 0)
        let current = this.head;
        if (n < 0 || n >= this.length) {
            return null
        } 
        for (let i = 0; i < n; i++){
            current = current.next;
        }
        return current;
    }
    set(index, newVal){
        // changing the value of a node based on it's position in the Linked List
        let foundNode = list.get(index);
        if(foundNode){
            foundNode.val = newVal;
            return true
        }
        return false
    }
    insert(index, newVal){
        // adding a node to the Linked List at a specific position

        
        if(index >= 0 && index < this.length) {
            if(index === this.length) return !!this.push(newVal);
            if(index === 0) return !!this.unshift(newVal);
            
            let previousNode = this.get(index - 1);
            let newNode = new Node(newVal);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
            
            return true
        }
        return false
    }
    remove(index){
        // remove a node from the given index
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let previousNode = get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        // reverse all the list and return it
        if(this.length){
            // swap the head and tail
            let node = this.head;
            this.head = this.tail;
            this.tail = node;

            let next;
            let prev = null;
            if (this.length > 1) {
                for (let i = 0; i < this.length; i++){
                    next = node.next;
                    node.next = prev;
                    prev = node;
                    node = next;
                }
            }
        }
        return this
    }
}