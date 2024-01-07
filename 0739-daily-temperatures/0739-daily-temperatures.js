
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let ans = new Array(n).fill(0);
    let stack = new Array();
    
    for(let i =0; i<n; i++){
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
            let idx = stack.pop();
            ans[idx] = i-idx;
        }
        stack.push(i)
    }
    return ans
};