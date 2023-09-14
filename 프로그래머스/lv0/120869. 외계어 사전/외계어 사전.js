function solution(spell, dic) {
    return dic.some((v)=>[...v].sort().toString()===[...spell].sort().toString()) ? 1 : 2
    // [1,2,3] === [1,2,3] 은 false 가 뜬다. toString() 해줘야함 
}