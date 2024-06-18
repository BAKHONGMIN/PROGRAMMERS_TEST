function solution(numbers, target) {
    let ways = [{ sum: 0, index: 0 }];
    let count = 0;

    while (ways.length > 0) {
        let { sum, index } = ways.pop();

        if (index === numbers.length) {
            if (sum === target) {
                count++;
            }
        } else {
            ways.push({ sum: sum + numbers[index], index: index + 1 });
            ways.push({ sum: sum - numbers[index], index: index + 1 });
        }
    }

    return count;
}