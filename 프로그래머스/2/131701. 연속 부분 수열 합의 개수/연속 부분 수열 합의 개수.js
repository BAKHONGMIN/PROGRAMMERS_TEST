function solution(elements) {
    const set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        elements.push(Number(elements.splice(0, 1)));
        for(let j =0; j<elements.length; j++){
            
            set.add(elements.slice(0, j+1).reduce((a, b) => a+b))
        }
    }
    

    return set.size;
}