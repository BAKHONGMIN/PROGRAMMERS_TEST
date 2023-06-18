function solution(n) {
    
    //주어진 값 1의 개수 구하기
    const twoLen = n.toString(2).match(/1/g).length;
    
    //주어진값 전역변수에 바인딩
    let num = n;
    
    //주어진 값 다음부터 무한반복하면서 1의 개수가 같을때 까지 돌다 같으면 return
    while(true){
        num++;
        if(num.toString(2).match(/1/g).length == twoLen){
            return num
        }
    }
}