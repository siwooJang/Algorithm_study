
var longestConsecutive = function(nums) {
    let cnums = new Set(nums);
    let longest= 0;
    
    for(num of cnums){
        if(cnums.has(num-1)) continue;
        let length = 1;
        while(cnums.has(length+num)) length++;
        longest = Math.max(length,longest)
    }
    
    return longest
    
};