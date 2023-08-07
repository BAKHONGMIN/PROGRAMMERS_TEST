function solution(s){
    
    // 주어진 문자열이 홀수이면 어차피 1개가 남으므로 무조건 result 0이나옴
   if(s.length % 2 !== 0){
       return 0
   }
    
    // 
    const array = [];
    
    for(let i = 0; i < s.length; i++){
        array.push(s[i]);
        if(array[array.length - 2] === array[array.length - 1]){
            array.pop();
            array.pop();
        }
        
    }
    return array[0] ? 0 :1;
}