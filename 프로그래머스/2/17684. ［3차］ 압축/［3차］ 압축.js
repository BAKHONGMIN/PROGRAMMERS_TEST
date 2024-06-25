function solution(msg) {
  const dictionary = [];
  const output = [];
  
  //  A-Z 배열
  for (let i = 65; i < 91; i++) {
    dictionary.push(String.fromCharCode(i));
  }

  let n = 0;
  let num = 1;
  
  while (num <= msg.length) {
    let str = msg.slice(n, num);

    if (dictionary.indexOf(str) === -1) {
      let str_1 = msg.slice(n, num - 1);
      dictionary.push(str);
      output.push(str_1);
      n = num - 1;
    } else {
      num += 1;
    }
  }
  
  // 마지막으로 남은 str_1 추가
  output.push(msg.slice(n, num - 1));

  return output.map(item => dictionary.indexOf(item) + 1);
}