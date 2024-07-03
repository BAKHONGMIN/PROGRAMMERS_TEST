function solution(numbers) {
    const index = [];
    const result = new Array(numbers.length).fill(-1);
    
    for(let i=0; i < numbers.length; i++){
        while(index.length > 0 && numbers[i] > numbers[index[index.length - 1]]){
            const idx = index.pop();
            result[idx] = numbers[i]
        }
        index.push(i)
    }
    return result
}