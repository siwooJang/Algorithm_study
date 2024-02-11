function solution(numbers) {
    var answer = 0;
    var set = new Set();
    var value = [];  
    var visited = Array(numbers.length).fill(false)
    for (let i=1; i<=numbers.length; i++) {
        dfs(0, i);
    }

    function dfs(cur_len, len) {
        if (cur_len === len) {
            set.add(parseInt(value.join('')));
            return;
        }
        for (let i=0; i<numbers.length; i++) {
            if (!visited[i]) {
                value.push(numbers[i])
                visited[i] = true;
                dfs(cur_len + 1, len);
                visited[i] = false;
                value.pop()
            }            
        }
    }
    answer = [...set].filter(n => {
        if (n < 2) return false
        for (let i=2; i<=Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true
    })

    return answer.length;
}
