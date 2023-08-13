function solution(sides) {
    let sum = 0;
    let max = Math.max(...sides);
    sides.forEach(n => {sum += n})
    if(max<sum-max){
        return 1
    } else{
        return 2
    }
}