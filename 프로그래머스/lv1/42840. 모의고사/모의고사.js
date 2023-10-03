function solution(answers) {
    const result = [];
    const math = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let num = [];
    
    for(let i=0; i<math.length;i++){
        num[i] = answers.filter((v,idx)=>
            v === math[i][idx%math[i].length]).length
    }
    let max = Math.max(...num)
    for(let j=0; j<num.length; j++){
        if(num[j]===max){
            result.push(j+1)
        }
    }
    return result
}
