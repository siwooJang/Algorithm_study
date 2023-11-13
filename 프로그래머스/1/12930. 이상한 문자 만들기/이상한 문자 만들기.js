function solution(s) {
    let answer = [];
    let result = s.split(" ")
    
    for ( let i =0; i<result.length; i++){
        let sum = ''
        for(let j =0; j<result[i].length;j++){
            if (j%2===0){
                sum += result[i][j].toUpperCase()
            } else {
                sum += result[i][j].toLowerCase()
            }
        }
        answer.push(sum)
    }
    return answer.join(' ')
}