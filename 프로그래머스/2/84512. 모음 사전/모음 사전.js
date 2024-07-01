function solution(word) {
    let maxNum = 0;
    let numLen = 5;
    let order = "AEIOU";
    let result = 0;
    
    for(let i = 1; i<=numLen; i++){maxNum+=order.length**i}
    for(let i = 1; i<=numLen; i++){
        const cases =  Math.floor(maxNum/order.length**i)
        const num = order.indexOf(word[i-1])+1
        num == 0 ? result+=0 : num == 1 ? result+=1 : result+=cases*(num-1)+1
    }
    return result
}