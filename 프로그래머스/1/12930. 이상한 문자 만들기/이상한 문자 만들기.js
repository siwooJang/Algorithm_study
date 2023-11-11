function solution(s) {
  const str = s.split(" ");
  var answer = [];

  let tmp = "";
  str.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      tmp += i % 2 == 0 ? element[i].toUpperCase() : element[i].toLowerCase();
    }

    answer.push(tmp);
    tmp = "";
  });

  return answer.join(" ");
}