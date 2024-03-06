function solution(want, number, discount) {
    
    // 내가 원하는 상품과 개수의 object
    const myItem = {};
    
    //내가 원하는 제품의 총 개수
    let myNumber = 0;
    
    // 가능한 날짜
    let day = [];
    
    // 원하는 상품과 원하는 개수를 조합하여 object 생성
    for(let i = 0; i < want.length; i++){
        const item = want[i];
        const quantity = number[i];
        myNumber+=number[i]
        myItem[item] = quantity;
    }
    
    //나의 구매 희망 리스트 object 정렬시키기
    const myKeys = Object.keys(myItem);
    myKeys.sort()
    const mySort = {}
    myKeys.forEach(key => {
        mySort[key] = myItem[key]
    })
    
    //세일 상품의 총수
    const idx = discount.length;
    
    // 내가 원하는 날짜와 세일상품의 총수 제한
    const limit = idx - myNumber;
    
    for(let i = 0; i <= limit; i++){
        // 내가 원하는 물건의 개수와 세일 개수를 맞추기 위해 잘라서 테스트
        const list = discount.slice(i, myNumber + i)
        
        // 자른 배열을 object형태로 생성
        const disList = list.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc
        }, {})
        
        // discount 정렬 시키기
        const disKeys = Object.keys(disList);
        disKeys.sort()
        const disSort = {}
        disKeys.forEach(key => {
            disSort[key] = disList[key]
        })
        
        // 내가 원하는 물건의 이름과 개수가 세일 물건 날짜와 개수가 맞는지 테스트
        const myList = JSON.stringify(mySort);
        const dList = JSON.stringify(disSort);
        
        if(myList === dList){
            day.push(i+1)
        }
    }
    return day.length
}