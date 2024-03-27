function solution(n, words) {
    
    const array = [...new Set(words)];
    let count = 0;
    const check = words.reduce((acc, cur, idx) => {
        if(acc[acc.length-1] !== cur[0]){
            words.splice(1)
            count++
            return idx+1
        }
        
        if(cur !== array[idx]){
            words.splice(1)
            count++
            return idx+1
        }
        
        return acc+cur
    })
    if(count === 0){
        return [0,0]
    }else{
        const a = check % n === 0 ? n : check % n;
        const b = Math.ceil(check / n);
    
        return [a, b];
    }
    
}