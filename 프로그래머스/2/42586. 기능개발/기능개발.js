function solution(progresses, speeds) {
    const finish = [];
    const result=[];
    let i = 0;
    
    for(let i in progresses){
        const day = (100 - progresses[i])/speeds[i]
        finish.push(Math.ceil(day))
    }
    

    while (i < finish.length) {
        let count = 1;
        for (let j = i + 1; j < finish.length; j++) {
            if (finish[j] > finish[i]) {
                break;
            }
            count++;
        }
        result.push(count);
        i += count;
    }
    return result;
}