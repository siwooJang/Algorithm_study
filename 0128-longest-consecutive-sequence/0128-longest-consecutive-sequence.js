
var longestConsecutive = function(nums) {
    
    let cnums = new Set(nums); // 중복제거 위함, [] 든 {}든 iterable이니까 상관 X
    let longest= 0;
    
    for(num of cnums){
        if(cnums.has(num-1)) continue;
        let length = 1;
        while(cnums.has(length+num)) length++;
        longest = Math.max(length,longest)
    }
    
    return longest
    
};