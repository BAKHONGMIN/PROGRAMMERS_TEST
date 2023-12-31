function solution(n){
    //순간이동을 가장 많이 해야 건전지를 많이 사용하지 않는다 그래서 
    //주어진 n값에 대해 2를 계속 나누어 순간이동을 하여 이동하고 만약 홀수가 나온다면
    //앞으로 한칸 이동후 다시 순간이동을 해야 가장 많이 순간이동을 할 수 있다.
    
    //반복문을 돌리기 위해 이동한 수를 x에 할당
    let x = n;
    
    //홀수가 나올때 앞으로 한칸 이동해야 하므로 점프한 수
    let index = 0;
    
    // n으로 부터 0이 될때 까지 반복
    while(x !== 0){
        
        // 만약 홀수라면 index에 추가 1해주고 -1을해주어 짝수로 만들어줌
        if(x%2 !== 0){
            x--
            index++
        }
        x/=2
    }
    return index
}