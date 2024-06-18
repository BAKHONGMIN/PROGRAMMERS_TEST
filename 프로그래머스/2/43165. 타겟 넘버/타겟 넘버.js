function solution(numbers, target) {
    // DP 테이블 초기화
    let dp = { 0: 1 };

    // 각 숫자에 대해 DP 테이블 업데이트
    for (const num of numbers) {
        let nextDp = {};
        for (const sum in dp) {
            const intSum = parseInt(sum);
            nextDp[intSum + num] = (nextDp[intSum + num] || 0) + dp[intSum];
            nextDp[intSum - num] = (nextDp[intSum - num] || 0) + dp[intSum];
        }
        dp = nextDp;
    }

    // 최종 결과 반환
    return dp[target] || 0;
}