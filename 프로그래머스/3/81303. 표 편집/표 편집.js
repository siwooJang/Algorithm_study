function solution(n, k, cmd) {
    let answer = new Array(n);
    for(let i = 0; i < n; i++){
        answer[i] = 'O';
    }
    
    let root = new Node(0);
    let curNode = root;
    let prevNode = root;
    for(let i = 1; i < n; i++){
        const newNode = new Node(i, prevNode);
        prevNode.next = newNode;
        prevNode = newNode;
        
        if(i === k){
            curNode = newNode;
        }
    }
    
    const history = [];
    cmd.map((commandLine) => {
        const [command, count] = commandLine.split(' ');
        let i = 0;
        switch(command){
            case 'U':
                while(i < count && curNode.prev){
                    curNode = curNode.prev;
                    i++;
                }
                break;
            case 'D':
                while(i < count && curNode.next){
                    curNode = curNode.next;
                    i++;
                }
                break;
            case 'C':
                history.push(curNode);
                const prev = curNode.prev;
                const next = curNode.next;
                if(prev && next){
                    prev.next = next;
                    next.prev = prev;
                    curNode = next;
                }else if(prev){
                    prev.next = null;
                    curNode = prev;
                }else if(next){
                    next.prev = null;
                    curNode = next;
                }
                break;
            case 'Z':
                const node = history.pop();
                const prevNode = node.prev;
                const nextNode = node.next;
                if(prevNode){
                    prevNode.next = node;
                }
                if(nextNode){
                    nextNode.prev = node;
                }
                break;
        }
    })
    
    history.map(node => {
        answer[node.idx] = 'X';
    })
    return answer.join('');
}

const Node = function(idx, prevNode){
    this.idx = idx;
    this.prev = prevNode;
    this.next;
}