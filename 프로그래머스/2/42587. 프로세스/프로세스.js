function solution(priorities, location) {
    let max = Math.max(...priorities);
    let index = priorities.indexOf(max);
    
    const array = [];
    const result = [];
    for(let i in priorities)array[i]=Number(i)
    
    let lengths = priorities.length;
    while(lengths>0){
        
        result.push(array[index])
        priorities[index]=0;
        
        const left = priorities.slice(0, index);    
        const right = priorities.slice(index);
        
        const lmax = Math.max(...left);
        const rmax = Math.max(...right);
    
        if(lmax > rmax){
            const idx = left.indexOf(lmax)
            index = idx;  
        }else{
            const idx = right.indexOf(rmax)
            index = idx+index;  
        }
        lengths--
    }

    const locations = result.indexOf(location) + 1
    return locations
}