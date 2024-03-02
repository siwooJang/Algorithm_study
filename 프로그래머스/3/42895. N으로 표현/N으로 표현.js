function solution(N, number) {
    var answer = 0;
    var a = Array.from(new Array(9), () => new Set());
    if(N==number) return 1;
    else {
        a.forEach((element, index) => {
            if (index !== 0) element.add(Number(String(N).repeat(index)));
        });
        for(var i=1 ; i<=8 ; ++i) {
            for(var j=1 ; j<i ; ++j) {
                for(var first of a[j]) {
                    for(var second of a[i-j]) {
                        a[i].add(first+second);
                        a[i].add(first-second);
                        a[i].add(first*second);
                        a[i].add(first/second);
                    }
                } 
            }
            if(a[i].has(number)) return i;
        }
        return -1;
    }
    return answer;
}