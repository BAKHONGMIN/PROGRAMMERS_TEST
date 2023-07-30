function solution(s){

    const string = s; 
    let num = 0; 
    
    for(let i = 0; i < string.length; i++){
        
        string[i] === '(' ? num += 1 : num -= 1;
        
        if (num < 0) {
            return false
        };
        
    }

    // num이 0이면 true를 반환해준다
    return num === 0 ? true : false;
}