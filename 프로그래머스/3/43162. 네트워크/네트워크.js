function solution(n, computers) {
    let answer = 0, visited=Array(n).fill(false)

  for(let i=0;i<n;i++){
   if(!visited[i]){
   dfs(i)
   answer++
   }
  }

function dfs(i){
 visited[i]=true
 for(let j=0;j<n;j++){
  if(computers[i][j]===1&& !visited[j])
   dfs(j)
  } 
 }

    return answer
}