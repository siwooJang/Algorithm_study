/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = [];

    const dfs = (curRoom) => {
      visited.push(curRoom);

      for (const key of rooms[curRoom]) {
        if (!visited.includes(key)) {
          dfs(key);
        }
      }
    };

    dfs(0);

    return visited.length === rooms.length;
};