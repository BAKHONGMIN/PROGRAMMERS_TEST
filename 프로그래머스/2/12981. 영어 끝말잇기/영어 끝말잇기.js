function solution(n, words) {
    
    // 원래의 단어배열과 중복값을 제거한 배열을 비교하기 위해 중복값 제가한 배열 생성
    const array = [...new Set(words)];
    
    // 어떠한 조건도 걸리지 않으면 틀린 인원이 없음을 증명
    let count = 0;
    
    // 반복문 시작
    const check = words.reduce((acc, cur, idx) => {
        
        // 앞의 마지막 글자와 다음 첫글자 비교
        if(acc[acc.length-1] !== cur[0]){
            words.splice(1)
            count++
            return idx+1
        }
        
        // 중복 제거된 배열과 원래의 배열을 비교하여 다르면 앞에 중복값이 있었던걸 증명
        if(cur !== array[idx]){
            words.splice(1)
            count++
            return idx+1
        }
        
        return acc+cur
    })
    
    // 글자 비교와 중복 비교에 걸리지 않으면 틀린 사람 없음
    if(count === 0){
        return [0,0]
    }else{
        
        // 참여 인원에서 틀린곳의 단어를 나누면 몇번째의 선수가 틀린지 알수있다
        const a = check % n === 0 ? n : check % n;
        
        // 틀린 단어의 위치에서 참여 인원을 나누면 참여 인원의 몇번째에서 틀렸는지 알수있다.
        const b = Math.ceil(check / n);
    
        return [a, b];
    }
    
}