function solution(numbers) {
  const str = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  str.forEach((nums, index) => {
    numbers = numbers.split(nums).join(index)}) 
    /* nums 대로 나누고, zero가 0번째에 있으니까 zero로 split하면 join하면서 0 넣어주고, 
    one도 1인덱스에 있으니까 join 하면서 1넣어주고.. ... 이렇게 다 넣기 */
  
  return Number(numbers) // 그대로 numbers 리턴하면 문자열이니까 Number로 숫자만들어서 반환
}