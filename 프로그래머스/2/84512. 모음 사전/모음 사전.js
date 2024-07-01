//javascript
function solution(word) {
    let maxNum = 0;  // 가능한 최대 단어 수를 저장할 변수
    let numLen = 5;  // 단어의 최대 길이
    let order = "AEIOU";  // 알파벳 순서
    let result = 0;  // 결과를 저장할 변수
    
    // 최대 단어 수 계산
    for(let i = 1; i<=numLen; i++){ 
        maxNum += order.length ** i;  // 각 길이에 대한 단어 수를 누적
    }
    
    // 주어진 단어의 순서를 계산
    for(let i = 1; i <= numLen; i++){
        const cases = Math.floor(maxNum / order.length ** i); // 현재 위치에서 가능한 경우의 수
        const num = order.indexOf(word[i-1]) + 1; // 현재 문자의 인덱스를 구함
        
        // 각 경우의 수를 더함
        num == 0 ? result += 0 : num == 1 ? result += 1 : result += cases * (num - 1) + 1;
    }
    return result; // 결과 반환
}