function solution(want, number, discount) {
    
    // 내가 원하는 상품과 개수
    const myItem = {};
    let myNumber = 0;
    let day = [];
    
    for(let i = 0; i < want.length; i++){
        const item = want[i];
        const quantity = number[i];
        myNumber+=number[i]
        myItem[item] = quantity;
    }
    
    //정렬시키기
    const myKeys = Object.keys(myItem);
    myKeys.sort()
    const mySort = {}
    myKeys.forEach(key => {
        mySort[key] = myItem[key]
    })
    
    //세일 상품
    const idx = discount.length;
    const limit = idx - myNumber;
    
    for(let i = 0; i <= limit; i++){
        const list = discount.slice(i, myNumber + i)
        const disList = list.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc
        }, {})
        
        const disKeys = Object.keys(disList);
        disKeys.sort()
        const disSort = {}
        disKeys.forEach(key => {
            disSort[key] = disList[key]
        })
        
        const myList = JSON.stringify(mySort);
        const dList = JSON.stringify(disSort);
        
        if(myList === dList){
            day.push(i+1)
        }
    }
    return day.length
}