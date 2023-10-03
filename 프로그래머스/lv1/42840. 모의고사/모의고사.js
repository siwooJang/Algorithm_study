function solution(answers) {
    const answer = [];
    const supo = [ [1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5] ]
    
    let score = [];
    
    for(let i = 0; i < supo.length; i++) {
        score[i] = answers.filter((el, idx) => 
            el === supo[i][idx % supo[i].length]).length;
    }

    let max = Math.max(...score);
  
    for(let i = 0; i < score.length; i++) {
     if(score[i] === max){
        answer.push(i+1)
      }
    }
  
    return answer;
}
