function solution(s) {
    if(s.length == 4 || s.length == 6){
        if(!isNaN(s)){
            if(!s.includes('e')){
                return true
            }
        }
    }
    return false
}