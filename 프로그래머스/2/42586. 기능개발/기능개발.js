function solution(progresses, speeds) {
    const finish = []; // 배포가능 날짜 배열
    const result=[]; // 배포가능 개수
    let i = 0; // 배포 가능 개수 시작값
    
    // 배포가능 날짜 구하기
    for(let i in progresses){
        const day = (100 - progresses[i])/speeds[i]
        finish.push(Math.ceil(day))
    }
    
    // 배포가능 개수 구하기
    while (i < finish.length) {
        let count = 1;
        for (let j = i + 1; j < finish.length; j++) {
            if (finish[i] < finish[j]) {
                break;
            }
            count++;
        }
        result.push(count);
        i += count;
    }
    return result;
}