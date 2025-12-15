function solution(numbers) {
    let arr = [];
   for(let i=0; i<numbers.length; i++){
       for(let j=0; j<numbers.length; j++){
         let a = numbers[i] + numbers[j]
         if( i != j){
          arr.push(a)   
         }
       }
   }
    arr.sort((a,b) => a-b);
    return [...new Set(arr)]
}