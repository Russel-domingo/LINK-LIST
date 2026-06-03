function LinkedList() {
    return {
        head: null,

        append(value) {
            // new node 
            const newNode = Node(value);

            if (this.head === null) {
                this.head = newNode;
                return;
            }

            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
        },

        prepend(value) {
            const newNode = Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        },

        size() {
            let size = 0
            let current = this.head;

            while (current != null) {
                size++;
                current = current.nextNode;
            }
            return size;
        },

        getHead() {
            
            return this.head;
        },

        tail() {
            if (this.head == null) {
                return null;
            }

            let current = this.head;
            while (current.nextNode != null) {
                current = current.nextNode;
            }

            return current;
        },
        
        at(index) {
            if (this.head == null) {
                return undefined;
            }

            let current = this.head;
            let count = 0; 
            
            while (current !== null) {
                if (count == index) {
                    return current;
                }

                current = current.nextNode;
                count++;
            }

            return undefined;
        },
        
        pop() {
            if (this.head == null) {
                return undefined;
            }

            let current = this.head;
            let previous = null;

            if (current.nextNode === null) {
                this.head = null;
                return current;
            }

            while (current.nextNode !== null) {
                previous = current;
                current = current.nextNode;
            }

            previous.nextNode = null;
            return current;
        },

        contains(value) {
            
            if (this.head == null) {
                return false;
            }

            let current = this.head;

            while (current !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.nextNode;
            }
            
            return false;
        },
    
        findIndex(value) {
            
        }
        //toString
        //
    }

}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
        
    }

}

const list = LinkedList();
list.append(9);
list.append(20);
list.append(30);

console.log(list.size());
console.log(list.getHead());
console.log(list.tail());
console.log(list.at(0)); // 30
console.log(list.pop());
console.log(list.contains(20)); // true