function solution(participant, completion) {
    let p = participant.sort();
    let c = completion.sort();
    for(let i =0; i<p.length; i++){
        if(p[i]!=c[i]){
            return p[i]
        }
    }
    
}