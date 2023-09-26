function solution(id_pw, db) {
    for(let i in db){
            if(db[i][0] == id_pw[0]){
                if(db[i][1] == id_pw[1]){
                    return "login"
                } else{
                    return "wrong pw"
                }
            }
    }
    return "fail"
}