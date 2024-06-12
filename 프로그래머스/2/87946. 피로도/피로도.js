function solution(k, dungeons) {
    const array = [];
    const result = [];
    
    (function allArr(subArr, m = []) {
        if (subArr.length === 0) {
            array.push(m);
        } else {
            for (let i = 0; i < subArr.length; i++) {
                let curr = subArr.slice();
                let next = curr.splice(i, 1);
                allArr(curr.slice(), m.concat(next));
            }
        }
    })(dungeons);
    
    for(let i=0; i<array.length; i++){
        let num = 0;
        let knum = k;
        for(let j=0; j<dungeons.length; j++){
            if(knum >= array[i][j][0]){
                num++
                knum-=array[i][j][1];
                continue;
            }else{
                break;
            }    
        }
        result.push(num);
    }
    return Math.max(...result)
}