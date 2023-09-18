function solution(k, tan) {
    let num = 0;
    
    // 중복 되는 값들을 묶어서 key, value 객체로 각가 숫자에 대한 개수를 구한다.
    const result = tan.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0)+1;
        return acc
    },{})
    
    // value값만 뽑아서 중복되어지는 값으로 내림차순하여 숫자가 많은 것을 먼저 처리한다.
    const sort = Object.values(result).sort((a, b) => b - a);
    
    //배열을 순회하면서 주어진 k값보다 크거나 같으면 멈추고 index를 뽑아 낸다
    for(let i = 0; i < sort.length; i++){
        num+= sort[i];
        if(num >= k){
            return i+1;
            break;
        }
    }
}
