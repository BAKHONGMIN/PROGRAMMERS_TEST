// function solution(n) {
    
//     // 위의 조건들을 계산해보면 피보나치의 수인것을 확인할 수 있다.
//     // 1일때 [1] / 2일때 [1,1], [2] / 3일때 [1,1,1], [1,2], [2,1] ....
//     // 3번째부터 앞의 두개의 합이 곧 n번째의 개수 이므로 앞의 두개의 숫자를 더해 넣어주면 해당 번째의 가지수가 된다.
//     const array = [1,2];
//     for(let i=3; i<=n; i++){
//         array.push((array[i-3] + array[i-2])%1234567)
//     }
//     return array[n-1];
// }
function solution(n) {
    let a = 1, b = 2;
    for(let i = 3; i <= n; i++) {
        [a, b] = [b, a];
        b = (a + b) % 1234567;
    }
    return n == 1 ? 1 : b;
}