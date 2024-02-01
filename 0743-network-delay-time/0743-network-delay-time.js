/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const time = Array(n).fill(Infinity)
    time[k-1]=0
    let changed = true
    while(changed){
        changed = false
        for(let [node1,node2,timeToNode] of times){
            node1--,node2--
            if(time[node1]===Infinity) continue
            if(time[node2] > time[node1] + timeToNode){
                time[node2] = time[node1] + timeToNode
                changed = true
            }
        }
    }
    let res = Math.max(...time)
    return res === Infinity ? -1 : res
};