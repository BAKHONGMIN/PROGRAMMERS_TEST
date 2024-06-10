function solution(s) {
    const result = [];
    const regex = s.replace(/^\{|\}$/g, "").replace(/[\{\}]/g, match => match === "{" ? "[" : "]");    
    const array = JSON.parse(`[${regex}]`);
    const sort = array.sort((a, b) => a.length - b.length);
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