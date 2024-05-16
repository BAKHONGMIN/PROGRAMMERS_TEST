function solution(citations) {
    
    // 논문 인용 배열을 정렬을 통해 내림차순으로 만든다
    const sortCitations = citations.sort((a, b) => b - a);
    
    let hIndex = 0;
    
    for(let i=1; i <= sortCitations.length; i++){
        if(sortCitations[i -1] >= i){
            hIndex++
        }
    }
    
    return hIndex
}