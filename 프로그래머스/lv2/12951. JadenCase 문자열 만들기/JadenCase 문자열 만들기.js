function solution(s) {
    
    // 모든 단어를 소문자로 변환하고 글자별 나누기
    // 배열 순회하여 첫글자 대문자 만들고 나머지 단어 합추고 조인
    const array = s.toLowerCase().split(" ").map((item) => 
                 item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
    
    return array
}