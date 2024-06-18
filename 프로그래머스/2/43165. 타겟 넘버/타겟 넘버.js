function solution(numbers, target) {
    let count = 0;

    function dfs(index, sum) {
        // 모든 숫자를 다 사용한 경우
        if (index === numbers.length) {
            // 합이 타겟과 같은지 확인
            if (sum === target) {
                count++;
            }
            return;
        }

        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);
        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }

    // DFS 시작
    dfs(0, 0);

    return count;
}