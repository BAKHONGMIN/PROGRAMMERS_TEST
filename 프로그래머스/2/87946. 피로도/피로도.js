function solution(k, dungeons) {
    const array = []; // dungeons의 모든 경우의 수를 집어 넣는 배열
    const result = []; // 모든 경우의 수에서 던전 통과 수를 넣는 배열
    
    // 즉시 함수로 모든 경우의 수를 array 배열에 넣기
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
    
    // 모든 경우의 수에서 던전 통과 개수를 result 배열에 넣기
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