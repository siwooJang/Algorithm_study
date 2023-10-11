function solution(progresses, speeds) {
    // answer: 각 배포마다 배포되는 기능의 수가 적힌 정수 배열
    var answer = [];
    // days: 배포일
    let days = 1;
    // cnt: 오늘 배포되는 기능의 수
    let cnt = 0;
    // progress: 현재 기능의 작업 진도
    let progress = 0;
    
    // 모든 작업이 다 배포될 때까지 반복
    while(progresses[0]){
        progress = progresses[0] + (speeds[0]*days)
        if(progress>=100){
            progresses.shift();
            speeds.shift()
            cnt++;
        }
        // 첫 번째 기능의 작업 진도가 100 미만일 경우 배포 불가능
        else{
            if(cnt>0){
                answer.push(cnt);
            }
            cnt=0;
            days++;
        }
    }
    // 모든 작업이 다 배포되고 나면, 마지막으로 카운트된 배포 완료 기능 개수 push
    answer.push(cnt)
    
    return answer;
}