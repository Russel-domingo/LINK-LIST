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
            if (this.head === null) {
                return -1;
            }

            let current = this.head;

            let index = 0;
            while (current !== null) {
                if (current.value === value) {
                    return index;    
                }

                current = current.nextNode;
                index++
            }
            return - 1;
        },

        toString() {
            let current = this.head;
            let result = "";

            while(current !== null) {
                result += `(${current.value}) -> `;
                current = current.nextNode;
            }

            result += `null`;
            return result;
        },

        insertAt(index, ...values) {

            if (index < 0) {
                return
            }

            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                const newNode = Node(value);

                if (index === 0) {
                    newNode = this.head;
                    this.head = newNode;
                    index++;
                    continue;
                }

                let current = this.head;
                let previous = null;
                let count = 0; 

                while (current !== null && count < index) {
                    previous = current;
                    current = current.nextNode;
                    count++;
                }

                newNode.nextNode = current;
                previous.nextNode = newNode;

            }
            
        },

        removeAt(index) {

            if (index < 0 || index >= this.size()) {
                throw new RangeError("index out of bound");
            }

            if (index === 0) {
                const removed = this.head;
                this.head = this.head.nextNode;
                return removed;
            }

            let current = this.head;
            let previous = null;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.nextNode;
                count++;
            }

            previous.nextNode = current.nextNode;
            return current;
        }
    }

}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
        
    }

}

module.exports = {LinkedList, Node};