function solution(n) {
    // n의 절반에서 더하면 무조건 본인을 넘어가니 자신의 절반까지만 더하기
    const ban = Math.round(n/2);
    
    //어차피 자기자신은 정답이라 초기값 1에서 시작
    let result = 1; 
  
    for(let a = 1; a <= ban; a++){
        let number = 0;
        for(let b = a; b < n; b++){
            number+=b;
            if(number == n){result++}
            if(number > n){break;}
        }
    }
    
    return result
}