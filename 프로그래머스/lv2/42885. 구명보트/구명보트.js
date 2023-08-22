function solution(people, limit) {
    const sort = people.slice().sort((a, b) => a - b);
    let count = 0;
    let min = 0;
    let max = sort.length-1;
    
    while(min <= max){
        if(sort[min] + sort[max] > limit || min === max){
            max--;
        }else{
            min++;
            max--;
            count++;
        }
    }
    return sort.length - count
}