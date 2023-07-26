function solution(num_list) {
    t = num_list.length-1
    let result = []
    for(i=0;i<num_list.length;i++){
        result[t] = num_list[i]
        t--;
    }
    return result
}