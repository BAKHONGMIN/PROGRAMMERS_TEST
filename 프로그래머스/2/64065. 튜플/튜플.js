function solution(s) {
    const result = [];
    
    // s의 처음과 끝의 중괄호를 제거하고 중괄호를 대괄호로 바꿔서 2차 배열로 생성
    const regex = s.replace(/^\{|\}$/g, "").replace(/[\{\}]/g, match => match === "{" ? "[" : "]");    
    
    // 현재 string값으로 되어있어 배열로 변환
    const array = JSON.parse(`[${regex}]`);
    
    //배열을 배열의 길이에 따라 정렬
    const sort = array.sort((a, b) => a.length - b.length);
    
    //정렬된 배열에서 숫자를 result에 넣은것에서 result에 있는 값을 
    //다음 item에서 제거해주고 처음을 반환하여 다시 result에    넣는다
    sort.map((item, idx) => {
        result.forEach(num => {
            const index = item.indexOf(num);
            if(index !== -1){
                item.splice(index, 1);
            }
        })
        result.push(item[0])
    })
    return result
}