function solution(n) {
    
    // 초기값 n은 2이상이여야 하기 때문에 2로 설정
    let initNum = 2;
    
    // 배열에 2이하일때의 값을 넣어준다.
    const array = [0,1];
    
    //while문을 이용하여 n값이 될때 까지 현재값 그 전의 값을 더하여 array 배열에 넣어준다
    while(initNum < n+1){
        const curNum = array[initNum-1] + array[initNum-2] //피보나치 수를 계산한다.
        array.push(curNum%1234567) // 피보나치의 값에 1234567을 나눈 나머지값을 array에 넣어준다.
        initNum++
    }
    return array[n]
}