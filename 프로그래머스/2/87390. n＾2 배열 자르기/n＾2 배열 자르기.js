function solution(n, left, right) {
    const result = []; // 결과를 저장할 배열

    // left와 right가 속한 행과 열을 계산
    const startRow = Math.floor(left / n);
    const startCol = left % n;
    const endRow = Math.floor(right / n);
    const endCol = right % n;

    // 주어진 범위 내에서 숫자 생성
    for (let i = startRow; i <= endRow; i++) {
        // 현재 행의 시작 열과 끝 열 결정
        const base = (i === startRow) ? startCol : 0;
        const limit = (i === endRow) ? endCol : n - 1;

        // 현재 행 내에서 숫자 생성
        for (let j = base; j <= limit; j++) {
            // 현재 행과 열 중 더 큰 값에 1을 더하여 결과 배열에 추가
            result.push(Math.max(i, j) + 1);
        }
    }

    // 결과 배열을 반환
    return result;
}
