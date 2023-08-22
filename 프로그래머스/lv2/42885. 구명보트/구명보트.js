function solution(people, limit) {
    const sort = people.slice().sort((a, b) => a - b);
    let count = 0;
    let min = 0;
    let max = sort.length-1;
    
    while(min <= max){
        const sum = sort[min] + sort[max];
        if(max === min){
            break;
        }
        if(sum <= limit){
            min++;
            max--;
            count++;
        }else{
            max--;
        }
    }
    return sort.length - count
}