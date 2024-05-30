function solution(clothes) {
    let object = {};
    let num = 1;
    clothes.forEach(item => {
        const [name, type] = item;
        object[type] = object[type] || [];
        object[type].push(name);
    });
    Object.values(object).map(item => num *= item.length+1)
    return num-1
}