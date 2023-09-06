function solution(n){
    
    let x = n;
    let index = 0;
    while(x != 0){
        if(x%2 !== 0){
            x--
            index++
        }
        x = x /2;  
    }
    return index
}