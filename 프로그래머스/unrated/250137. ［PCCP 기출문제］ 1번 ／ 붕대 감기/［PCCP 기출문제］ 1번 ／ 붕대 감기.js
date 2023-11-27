function solution(bandage, health, attacks) {
    let maxhealth = health;
    let maxtime = attacks[attacks.length - 1][0];
    let attack_dict = {};
    attacks.forEach(attack => {
        attack_dict[attack[0]] = attack[1];
    });

    let t = 0;
    let continue_sec = 0;

    while (t <= maxtime) {
        if (attack_dict.hasOwnProperty(t)) {
            health -= attack_dict[t];
            continue_sec = 0;

            // When hit by an attack, your stamina is -1
            if (health <= 0) {
                return -1;
            }
        } else {
            continue_sec += 1;
            if (continue_sec < bandage[0]) {
                health += bandage[1];
                if (health > maxhealth) {
                    health = maxhealth;
                }
            } else {
                health += bandage[1] + bandage[2];
                if (health > maxhealth) {
                    health = maxhealth;
                }
                continue_sec = 0;
            }
        }

        t += 1;
    }

    return health;
}
