function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        let [aGAP,bGAP] = [Math.abs(n-a),Math.abs(n-b)];
        if(aGAP===bGAP){
            return b-a; // 거리가 같다면 오름차순
        } 
        return aGAP - bGAP // 거리가 다르다면 거리순으로 오름차순
    })
}