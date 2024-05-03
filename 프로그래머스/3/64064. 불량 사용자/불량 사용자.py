#https://bongseok.tistory.com/66

from itertools import permutations
def solution(user_id, banned_id):
    def check(user,ban):
        if len(user)==len(ban):
            for i,j in zip(user,ban):
                if j=='*':
                    continue
                elif i != j:
                    return False
        else:
            return False
        return True
    answer = []
    for permu in permutations(user_id,len(banned_id)):
        flag = True
        for i in range(len(banned_id)):
            if not check(permu[i],banned_id[i]):
                flag = False
        if flag:
            if set(permu) not in answer:
                answer.append(set(permu))
    return len(answer)

