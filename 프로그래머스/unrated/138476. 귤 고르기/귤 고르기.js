function solution(k, tan) {
    const result = tan.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0)+1;
        return acc
    },{})
    
    const sort = Object.values(result).sort((a, b) => b - a);
    let num = 0;
    for(let i =0; i < sort.length; i++){
        num+= sort[i];
        if(num >= k){
            return i+1;
            break;
        }
    }
    
}