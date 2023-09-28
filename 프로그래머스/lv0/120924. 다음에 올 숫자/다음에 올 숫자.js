function solution(common) {
    if(common[2]-common[1] == common[1] - common[0]){
        return common[common.length-1] + common[2]-common[1]
    } else{
        let a = common[2] / common[1]
        return common[common.length-1] * a
    }
}