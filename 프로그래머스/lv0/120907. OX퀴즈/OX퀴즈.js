function solution(quiz) {

  // 들어온 문자열 배열을 map() 메서드를 통해 하나씩 확인한다.
  return quiz.map((n) => {

    // 배열 구조 분해를 통해 식과 값을 나눈다.
    // ex) evaluation: "3 - 4", answer: "-3"
    const [evaluation, answer] = n.split(" = ");

    // eval() 메서드는 주어진 코드를 평가하는 메서드로 
    // 문자열 식을 넣으면 그에 대한 값을 반환해준다.
    // eval()에서 가져온 값과 미리 구해둔 answer의 값이 같으면 O 아니면 X를 반환한다.
    return eval(evaluation) === Number(answer) ? "O" : "X";
  });
}