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
    }

}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }

}
