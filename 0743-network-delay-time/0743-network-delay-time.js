/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let graph = new Array(n+1).fill(null);
    for(let time of times){
        const [from, to, t] = time;
        if(!graph[from])
            graph[from] = [];
        graph[from].push([to,t]);
    }
    
    let minHeap = new MinPriorityQueue({
        priority: (item) => item[1]
    });
    const visited = new Set();
    let minTime = 0;
    minHeap.enqueue([k,0]);
    
    //BFS
    while(minHeap.front() !== null){
        const [node,totalTime] = minHeap.dequeue().element;
        if(visited.has(node))
            continue;
        visited.add(node);
        minTime = Math.max(minTime,totalTime);
        
        let connectedNodes = graph[node];
        if(!connectedNodes)
            continue;
        for(let node of connectedNodes){
            const [nodeNum, nodeTime] = node;
            minHeap.enqueue([nodeNum,nodeTime + totalTime])
        }
    }
    
    if(visited.size !== n){
        return -1
    }
    
    return minTime;
};