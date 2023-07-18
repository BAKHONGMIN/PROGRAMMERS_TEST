function solution(A,B){

    //제일 작은 수와 제일 큰수를 곱하면 최솟값이 된다.
    const min = A.sort((a, b) => a - b);
    const max = B.sort((a, b) => b - a);
    
    // 최솟값과 최대값 곱한수를 더하여 주는 변수
    let result = 0;
    
    for(let i in min){
        result += min[i] * max[i]
    }
    return result
}