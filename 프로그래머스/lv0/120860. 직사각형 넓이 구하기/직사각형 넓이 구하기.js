function solution(dots) {
    dots.sort((a,b) => a[0]-b[0])
    // x작,y x작,y x큰,y x큰,y 이렇게 정렬됨,  
    // 따라서 0 1 은 x축 차이 가로, 0 2 는 y축 차이 세로 
    let a = Math.abs(dots[0][1] - dots[1][1])
    let b = Math.abs(dots[0][0] - dots[2][0])
    return a*b
}