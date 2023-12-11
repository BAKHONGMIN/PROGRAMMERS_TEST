function solution(n) {
    const array = [1,2];
    for(let i=3; i<=n; i++){
        array.push(array[i-3]%1234567 + array[i-2]%1234567)
    }
    return array[n-1]%1234567
}