function solution(answers) {
    
    let result = [];
    
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let counter = [0,0,0]

    for(let i =0; i<answers.length;i++){
        if(answers[i]===a1[i%a1.length]) counter[0]++;
        if(answers[i]===a2[i%a2.length]) counter[1]++;
        if(answers[i]===a3[i%a3.length]) counter[2]++;
    }
    
    let max = Math.max(counter[0],counter[1],counter[2])
    
    if(max===counter[0]) result.push(1);
    if(max===counter[1]) result.push(2);
    if(max===counter[2]) result.push(3);
    
    return result
}
