function solution(people, limit) {
    // sort를 이용하면 원본 데이터가 변형이 되기때문에 slice를 써서 원본데이터는 건들지 않는다.
    const sort = people.slice().sort((a, b) => a - b);
    let count = 0; //몸무게 큰 인원과 작은 인원 두명의 인원이 limit보다 작으면 count를 넣어준다
    let min = 0; //몸무게가 작은 인덱스 시작
    let max = sort.length-1; //몸무게가 큰 인덱시 시작
    
    //작은 몸무게에서 큰 무게까지 반복한다
    while(min <= max){
        // 몸무게 작은 인원과 큰인원의 합
        const sum = sort[min] + sort[max];
        if(max === min){
            break; // 큰인원인덱스와 작은 인덱스가 같아지면 정지
        }
        // 합의 크기가 limit보다 작으면 큰몸무게 줄이고 작은몸무게에서 1씩늘려 검색
        if(sum <= limit){
            min++;
            max--;
            count++;
        }else{
            max--; //넘는다면 무게가 큰곳에서 이동하여 검색
        }
    }
    return sort.length - count
}
