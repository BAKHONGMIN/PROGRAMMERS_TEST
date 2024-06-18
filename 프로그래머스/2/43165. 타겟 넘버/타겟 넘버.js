function solution(numbers, target) {
    // ways배열을 초기화(합이 0 인덱스 0)
    let array = [{ sum: 0, index: 0 }];
    
    // target의 조건 충족 개수
    let count = 0;

    // ways의 배열이 빌때까지 반복
    while (array.length > 0) {
        let { sum, index } = array.pop();

        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
        } else {
            array.push({ sum: sum + numbers[index], index: index + 1 });
            array.push({ sum: sum - numbers[index], index: index + 1 });
        }
    }

    return count;
}