function solution(people, limit) {
    people.sort((a, b) => a - b)
    let answer = 0
    let [l,r] = [0,people.length - 1];
    while(l<=r){
        let sum = people[l]+people[r]
        if(sum>limit){
            r--;
        } else {
            l++;
            r--;
        }
        answer++ 
    }

    return answer
}