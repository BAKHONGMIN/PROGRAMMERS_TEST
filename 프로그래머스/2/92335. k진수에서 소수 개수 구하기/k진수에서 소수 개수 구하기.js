function solution(n, k) {
    // k 진수로 바꾸기
    const convert = n.toString(k);
    
    // 0으로 되어있는 부분 빼고 숫자 빼내기
    const string = convert.split(0);
    
    // 소수 개수
    let result = 0;
    
    // 0을 제외한 숫자만 골라 소수 검색
    for(let i=0; i<string.length; i++){
        if(string[i] == "")continue
        const num = string[i];
        if(num == 1 || num == 0){
            continue;
        }else if(num == 2){
            result++
            continue;
        }else{
            let check = 0
            // 시간 초과가 뜨므로 제곱근으로 구하여 한번이라도 0이 되면 소수가 아니므로 통과
            for ( let j = 2 ; j <= Math.sqrt(num) ; j ++) {
                if (num % j === 0) { 
                    check++
                    break
                }
            }
            if(!check)result++;
        }
    }
    return result
}