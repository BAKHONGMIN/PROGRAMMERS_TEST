function solution(str1, str2) {
    const strup1 = str1.toUpperCase().replace(/\s/g, "-");
    const strup2 = str2.toUpperCase().replace(/\s/g, "-");
    
    const arr1 = [];
    const arr2 = [];
    
    let num1 = 0;
    let num2 = 0;

    // 두 글자씩 끊어서 배열에 추가
    while(num1 < strup1.length - 1){
        const str = strup1.slice(num1, num1 + 2);
        const regex = /^[A-Z]{2}$/;
        if(regex.test(str)){
            arr1.push(str);
        }
        num1++;
    }
    
    while(num2 < strup2.length - 1){
        const str = strup2.slice(num2, num2 + 2);
        const regex = /^[A-Z]{2}$/;
        if(regex.test(str)){
            arr2.push(str);
        }
        num2++;
    }
    
    // 교집합 및 합집합 계산
    const counter1 = {};
    const counter2 = {};
    
    arr1.forEach(item => {
        counter1[item] = (counter1[item] || 0) + 1;
    });
    
    arr2.forEach(item => {
        counter2[item] = (counter2[item] || 0) + 1;
    });
    
    let intersection = 0;
    let union = 0;
    
    const allItems = new Set([...arr1, ...arr2]);
    
    allItems.forEach(item => {
        const count1 = counter1[item] || 0;
        const count2 = counter2[item] || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });
    
    if (union === 0) {
        return 65536;
    } else {
        return Math.floor((intersection / union) * 65536);
    }
}

