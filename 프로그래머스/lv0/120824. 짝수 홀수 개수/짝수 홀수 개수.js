function solution(num_list) {
    let result = [0,0]
    for(items of num_list){
        if((items%2) == 0){
            result[0] += 1
        } else {
            result[1] += 1
        }
    }
    return result
}