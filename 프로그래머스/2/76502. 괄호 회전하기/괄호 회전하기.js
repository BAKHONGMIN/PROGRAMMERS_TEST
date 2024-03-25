function solution(s) {
    
    // 괄호는 짝수가 올바른 것이므로 홀수개이면 올바른 괄호가 될수없다.
    if(s.length % 2 !== 0){
        return 0
    }
    
    // 조건이 맞으면 카운트
    let count = 0;
    
    // 문자열 저장
    let strings = s;
    
    //s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전 반복문
    for(let i=0; i<s.length; i++){
        
        // 반복 할때 마다 변경된 strings로 다시 계산
        let destrings = strings;
        
        // 괄호는 2개가 한쌍이므로 2로 나눠서 괄호 삭제 테스트
        for(let j = 0; j<s.length/2; j++){
            destrings = destrings.replace(/\[\]/g, "").replace(/\(\)/g, "").replace(/\{\}/g, "");    
        }

        // 괄호를 반복하여 지웠을때 남는 문자열이 존재 하지 않으면 올바른 괄호
        if(destrings === ""){
           count++
        }
        
        // 문자열의 올바른 괄호를 판별했으면 첫번째 문자를 맨뒤로 옮기기
        let movedChar = strings.slice(0, 1); 
        strings = strings.slice(1) + movedChar; 
    }

    // 올바른 괄호 개수
    return count
}