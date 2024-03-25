function solution(s) {
    
    // 조건이 맞으면 카운트
    let count = 0;
    
    // 문자열 저장
    let strings = s;
    
    for(let i=0; i<s.length; i++){
        let destrings = strings;
        for(let j = 0; j<s.length/2; j++){
            destrings = destrings.replace(/\[\]/g, "").replace(/\(\)/g, "").replace(/\{\}/g, "");    
        }
        console.log(destrings) 
        if(destrings === ""){
           count++
        }
        let movedChar = strings.slice(0, 1); 
        strings = strings.slice(1) + movedChar; 
    }

    return count
}