function solution(numbers, target) {
    // ways배열을 초기화(합이 0 인덱스 0)
    let array = [{ sum: 0, index: 0 }];
    
    // target의 조건 충족 개수
    let count = 0;

    // ways의 배열이 빌때까지 반복
    while (array.length > 0) {
        
        // 배열의 마지막 요소를 꺼내어 현재 합계와 인덱스를 가져온다.
        let { sum, index } = array.pop();

        // 모든 숫자를 다 사용한 경우
        if (index === numbers.length) {
            // 현재 합계가 목표 숫자와 같은지 확인
            if (sum === target) {
                count++;
            }
        } else {
             // 다음 숫자를 더한 경우를 배열에 추가
            array.push({ sum: sum + numbers[index], index: index + 1 });
            // 다음 숫자를 뺀 경우를 배열에 추가
            array.push({ sum: sum - numbers[index], index: index + 1 });
        }
    }

    return count;
}