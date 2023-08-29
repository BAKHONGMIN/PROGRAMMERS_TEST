function solution(n,a,b)
{
    // a, b 변수에 대입
    let A = a;
    let B = b;
    
    // A,B 계산하기위한 변수
    let num = 0;
    
    // 한번 시합을 할때마다 2씩 나눠지므로 반복하여 2를 나눈다.
    // 1이하일때는 계속하여 0.00 소수점이 발생하므로 Math.ceil을 이용하여 반올림시켜준다.
    // 마지막에와 시합을 하게 되면 1에서 서로 같아진다
    while(A !== B){
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        num++    
    }
    return num
}