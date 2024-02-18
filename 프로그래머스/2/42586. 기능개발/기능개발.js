function solution(progresses, speeds) {
    let count = 0;
    let result = [];

    while (progresses.length > 0) {
        // 각 기능의 진도 갱신
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        // 완료된 기능 배포
        while (progresses.length > 0 && progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }

        // 완료된 기능이 있을 경우 결과에 추가
        if (count > 0) {
            result.push(count);
            count = 0; // 초기화
        }
    }

    return result;
}