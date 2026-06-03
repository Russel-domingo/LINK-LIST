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
        }
        //head()
        //tail()
        //at()
        //pop()
        //contains
        //findIndex
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
list.append(30);
list.append(20);
list.append(30);

console.log(list.size());
