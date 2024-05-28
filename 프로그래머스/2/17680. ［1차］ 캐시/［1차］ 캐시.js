function solution(cacheSize, cities) {
    
    cities = cities.map((item) => item.toLowerCase())
    const cacheArray = [];
    let num =0;
    
    if(!cacheSize){
        return num = cities.length * 5
    }
    
    cities.map((item) => {
        if(cacheArray.length >= cacheSize){
            if(cacheArray.includes(item)){
                const index = cacheArray.indexOf(item);
                cacheArray.splice(index, 1);
                cacheArray.push(item);
                num++;
            }else{
                cacheArray.shift();
                cacheArray.push(item);
                num += 5;
            }       
        }else{
            if(cacheArray.includes(item)){
                const index = cacheArray.indexOf(item);
                cacheArray.splice(index, 1);
                cacheArray.push(item);
                num++;
            }else{
                cacheArray.push(item);
                num += 5;
            }
        }
    })
    
    return num
}