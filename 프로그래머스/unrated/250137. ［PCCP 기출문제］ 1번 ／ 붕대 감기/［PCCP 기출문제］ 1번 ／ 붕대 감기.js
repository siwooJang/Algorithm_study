function solution(bandage, health, attacks) {
    const [time, heal, bonus] = bandage;
    const len = attacks[attacks.length - 1][0];
    let cntSuccess = 0;
    let curHp = health; // 캐릭터 체력
    let attackIdx = 0; // 현재 공격 정보

    for (let i = 1; i <= len; i++) {
        // 체력이 다 소진 된 경우
        if (curHp <= 0) return -1;

        // 공격시간이 된 경우
        if (attackIdx < attacks.length && i === attacks[attackIdx][0]) {
            curHp -= attacks[attackIdx][1];
            cntSuccess = 0;
            attackIdx++; // 다음 공격 정보로 이동
            continue;
        }

        // 공격시간이 아니면 체력 회복
        curHp += heal;
        cntSuccess++;

        if (cntSuccess === time) {
            curHp += bonus;
            cntSuccess = 0;
        }


        // curHp가 원래 체력 보다 넘어간 경우 다시 원래 체력으로 재할당
        if (curHp > health) curHp = health;
    }

    return curHp <= 0 ? -1 : curHp;
}