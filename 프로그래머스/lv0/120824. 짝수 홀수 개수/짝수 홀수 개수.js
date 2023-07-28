function solution(num_list) {
    let a = 0;
    let b = 0;
    for(let i=0; i<num_list.length;i++){
        if(num_list[i]%2==0){
            a++
        }else{
            b++
        }
    }
    return [a,b]
}