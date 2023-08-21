function solution(num, k) {
    let index = num.toString().split("").indexOf(k.toString());
    if( index === -1 ){
        return -1
    }else{
        return index+1
    }
}