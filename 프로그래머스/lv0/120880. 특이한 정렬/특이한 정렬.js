function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        let [aGAP,bGAP] = [Math.abs(n-a),Math.abs(n-b)];
        if(aGAP===bGAP){
            return b-a;
        } 
        return aGAP - bGAP
    })
}