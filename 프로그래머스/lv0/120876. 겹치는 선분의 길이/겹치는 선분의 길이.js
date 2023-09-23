function solution(lines) {
    let result = 0
    let map = new Array(200) // -100 ~ 100 a b 길이
    map.fill(0)
    
    for(let i=0;i<lines.length;i++){
        let a = lines[i][0]
        let b = lines[i][1]
        
        for(let j=a;j<b;j++){
            map[j+100] += 1 // +100은 -100 ~ 100에서 0기준
        }
    }
    
    for(let i in map){
        if(map[i]>1)
            result++
    }
    
    return result
}