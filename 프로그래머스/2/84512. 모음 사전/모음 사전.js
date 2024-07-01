function solution(word) {
    let order = "AEIOU";
    let result = 0;
    let maxNum = 0;
    
    // 길이 1부터 5까지의 단어로 구성할 수 있는 최대 개수를 계산
    for (let i = 1; i <= 5; i++) {
        maxNum += Math.pow(order.length, i);
    }
    
    // 주어진 단어의 순서를 계산
    for (let i = 0; i < word.length; i++) {
        let num = order.indexOf(word[i]); // 현재 문자의 순서를 찾음
        let cases = 0;
        
        // 각 위치에서 시작하는 가능한 경우의 수를 계산
        for (let j = 4; j > i; j--) {
            cases += Math.pow(order.length, j - i);
        }
        
        // 현재 문자로 시작하는 경우의 수를 누적
        result += num * (cases + 1) + 1;
    }
    
    return result;
}
