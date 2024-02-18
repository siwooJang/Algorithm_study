function solution(s){
    let answer = [];
    let a = 0; let b = 0;
    for(let i =0; i<s.length; i++){
        if(s[i]=='('){
            answer.push(s[i]);
            a++;
        } 
        if(s[i]==')'){
            answer.pop();
            b++;
        }
    }
    if(a!=b) return false;
    return answer.length == 0 ? true : false;
}