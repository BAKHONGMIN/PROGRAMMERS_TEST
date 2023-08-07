function solution(s){
    
    // 주어진 문자열이 홀수이면 어차피 1개가 남으므로 무조건 result 0이나옴
   if(s.length % 2 !== 0){
       return 0
   }
    
    // 반본문에서 현재 값을 넣을 배열
    const array = [];
    
    // 반복문을 돌면서 현재값을 array에 집어 넣고 그 전의 값과 비교하여 
    // 같으면 array 배열에서 현재 값과 그전의 값을 제거하고 반복한다.
    for(let i = 0; i < s.length; i++){
        array.push(s[i]);
        if(array[array.length - 2] === array[array.length - 1]){
            array.pop();
            array.pop();
        }
        
    }
    return array[0] ? 0 :1;
}