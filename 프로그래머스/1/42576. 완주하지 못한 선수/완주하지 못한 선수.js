function solution(participant, completion) {
    let result = [];
    let a = participant.sort()
    let b = completion.sort()
    for(let i =0; i<a.length;i++){
        if(a[i]!=b[i]){
            return a[i]
        } 
    }
}

