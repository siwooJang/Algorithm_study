function solution(name, yearning, photo) {
    // indexOf로 name에서 해당 사람의 인덱스를 가져온 후, yearning에 데이터로 가져오기
    // 다만 점수 데이터가 없으면 undefined가 반환되므로 0으로 처리
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
    // 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 
    // 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자
}