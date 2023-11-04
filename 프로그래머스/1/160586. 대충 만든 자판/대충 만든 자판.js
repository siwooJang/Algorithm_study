function solution(keymap, targets) {
    const answer = new Array(targets.length).fill(-1);
    
    // targets을 탐색
    for(let i = 0; i < targets.length; i++) {
        const target = targets[i];
        let count = 0;
        // target의 각 문자를 탐색
        for(let j = 0; j < target.length; j++) {
            const str = target[j];
            // keymap의 각 요소 중 target[j]를 포함하는 문자의 minimum index 구함
            const min = Math.min(...keymap.map(x => {
                const idx = x.indexOf(str);
                return idx === -1 ? Infinity : idx + 1;
            }));
            if(min === Infinity) {
                count = -1;
                break;
            }
            count += min;
        }
        answer[i] = count;
    }
    
    return answer;
}