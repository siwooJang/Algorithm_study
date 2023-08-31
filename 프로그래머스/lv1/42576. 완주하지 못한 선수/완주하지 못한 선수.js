function solution(participant, completion) {
    participant.sort()
    completion.sort()
    while(participant.length){
        let pp = participant.pop()
        if ( pp != completion.pop())
            return pp
    }
}