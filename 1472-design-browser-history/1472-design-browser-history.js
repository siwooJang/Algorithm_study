// 1. DLLNode class 정의
class DLLNode {
    constructor(url) {
        // url string을 저장할 변수 선언
        this.data = url;
        // prev, next node를 가리키는 pointers 선언
        this.prev = null;
        this.next = null;
    }
}

// 2. BrowserHistory class 정의
class BrowserHistory {
    constructor(homepage) {
        // Head node를 가리키는 변수에 DLLNode의 instance를 할당
        this.head = new DLLNode(homepage);
        // Current URL node를 가리키는 current 변수 선언
        this.current = this.head;
    }

    visit(url) {
        // 입력된 url을 기반으로 새로운 node를 생성
        const new_node = new DLLNode(url);
        // current node의 next가 새로운 node를 가리키도록 한다.
        this.current.next = new_node;
        // 새로운 node의 prev가 current node를 가리키도록 한다.
        new_node.prev = this.current;
        // 그 후 current로 새로운 node를 가리킨다.
        this.current = new_node;
    }

    back(steps) {
        while (steps > 0 && this.current.prev !== null) {
            this.current = this.current.prev;
            steps--;
        }
        // 변경된 current URL을 리턴한다.
        return this.current.data;
    }

    forward(steps) {
        while (steps > 0 && this.current.next !== null) {
            this.current = this.current.next;
            steps--;
        }
        return this.current.data;
    }
}