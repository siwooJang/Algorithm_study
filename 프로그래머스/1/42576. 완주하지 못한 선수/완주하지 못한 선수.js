function solution(participant, completion) {
    let k = new Map();
    for(let i=0;i<completion.length;i++){
        if(!k.has(completion[i])){
            k.set(completion[i],1)
        } else {
            k.set(completion[i],k.get(completion[i])+1)
        }
    }
    
    for(let i=0;i<participant.length;i++){
        if(!k.has(participant[i])){
            return participant[i]
        }
        
        if(k.get(participant[i])===0){
            return participant[i]
        } else {
            k.set(participant[i],k.get(participant[i])-1)
        }
    }
}