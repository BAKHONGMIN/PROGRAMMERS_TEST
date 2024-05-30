function solution(clothes) {
    let object = {};
    let num = 1;
    
    // object안에 의상의 종류를 key값으로 의상의 이름은 value로 설정하여 객체를 생성
    clothes.forEach(item => {
        const [name, type] = item;
        object[type] = object[type] || [];
        object[type].push(name);
    });
    
    // 각 의상의 종류의 값에 안입는 조건을 넣어 value의 + 1을하여 
    // 각 value를 곱하고 아무것도 안입는다는건 안되므로 총계산에서 -1을 시킴
    Object.values(object).map(item => num *= item.length+1)
    return num-1
}