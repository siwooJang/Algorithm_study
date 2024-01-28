/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const queue = [0];
    
    while(queue.length>0){
        const curRoom = queue.shift();
        visited.add(curRoom);
        
        for(const key of rooms[curRoom]){
            if(!visited.has(key)){
                queue.push(key);
                visited.add(key);
                }
            }
        }
    
    return visited.size === rooms.length;
};
