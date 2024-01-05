class Node {
    constructor(url) {
        this.data = url;
        this.prev=null;
        this.next=null;
    }
}

class BrowserHistory {
    constructor(homepage){
        this.head = new Node(homepage);
        this.current = this.head;
    }
    
    visit(url) {
        const new_node = new Node(url);
        this.current.next = new_node;
        new_node.prev = this.current;
        this.current = new_node
    }
    
    back(steps){
        while(steps>0 && this.current.prev !== null) {
            this.current = this.current.prev;
            steps--;
        }
        return this.current.data;
    }
    
    forward(steps){
        while(steps>0 && this.current.next !== null) {
            this.current = this.current.next;
            steps--;
        }
        return this.current.data;
    }
}