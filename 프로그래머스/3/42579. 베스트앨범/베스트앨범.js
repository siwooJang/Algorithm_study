function solution(genres, plays) {
    let obj = {};
    let result = [];
    // genres 에 plays를 더해주기 
    for(let i =0; i<genres.length; i++){
        obj[genres[i]] = (obj[genres[i]]||0) + plays[i]; 
    }
    // 1번 형태 {"classic":1450,"pop":3100}

    let arr=Object.entries(obj)
    arr.sort((a,b)=>b[1]-a[1]);
    // [["pop", 3100 ], ["classic", 1450 ] ]
    
    let compose=genres.map((g,i)=>({
        genre:g,
        index:i,
        playCnt:plays[i]
    })) 
    // 2번 형태 [{"genre":"classic","index":0,"playCnt":500},{"genre":"pop","index":1,"playCnt":600}, ....]
    
    // 2번에서 1번 객체의 키값에 해당하는 장르들을 배열에 따로 저장해서 재생횟수 별로 내림차순 정렬을 한 후, 
    // 상위 두개 원소의 고유번호만 뽑아서 result 배열에 push 해준다.
    arr.forEach((k,i)=>{
        let cnt=[];
        for(let j=0;j<compose.length;j++){
            if(k[0]===compose[j].genre){
                cnt.push(compose[j]);
            }
        }
        cnt.sort((a,b)=>b.playCnt-a.playCnt);
        
        cnt.forEach((c,i)=>{
            if(i<2){
             // 2개만 뽑아야 하기 때문에 index가 2보다 작을때까지만 answer.push 수행
            result.push(c.index)
            }        
        })
    })
    return result
}