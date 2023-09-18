function solution(arr) {

    //주어진 숫자를 반복하여 구하기
    return arr.reduce((acc, cur) => (
        Lcm(acc, cur)
    ))
       
}

// 유클리드 호제법을 사용하여 문제를 풀자
// 일단 유클리드 호제법에서의 최대 공약수를 구해보자
// 유클리드 호제법의 공식은 두수를 지속하여 나누고 두수가 나누어 질때 나눌수 있는 값이 최대 공약수이다.
const Gcd = (a, b) => {
    if(b === 0)return a
    return Gcd(b, a%b)
}

// 최소공배수는 두자연수의 곱 / 최대 공약수라는 공식으로 풀어봐야한다.
const Lcm = (a, b) =>{
    return (a*b)/Gcd(a,b)
}

