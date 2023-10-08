function solution(number) {
    let result = 0;
    
    const setItem = (current,start)=>{
        if(current.length === 3){
            result += current.reduce((acc,cur)=>acc+cur,0) === 0 ? 1 : 0
        }
        
        for(let i = start; i<number.length; i++){
            setItem([...current,number[i]],i+1);
        }
    }
    
    setItem([],0)
    return result
}