function solution(n, left, right) {
    const result = [];
    const startRow = Math.floor(left / n);
    const startCol = left % n;
    const endRow = Math.floor(right / n);
    const endCol = right % n;

    for (let i = startRow; i <= endRow; i++) {
        const base = (i === startRow) ? startCol : 0;
        const limit = (i === endRow) ? endCol : n - 1;

        for (let j = base; j <= limit; j++) {
            result.push(Math.max(i, j) + 1);
        }
    }

    return result;
}
