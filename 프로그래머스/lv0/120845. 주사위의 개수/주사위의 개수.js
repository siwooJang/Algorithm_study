function solution(box, n) {
    var answer = box.reduce((acc,cur) => acc * parseInt(cur/n),1);
    return answer;
}